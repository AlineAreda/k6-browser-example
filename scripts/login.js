import { browser } from "k6/browser";
import { sleep, check } from "k6";

export const options = {
  scenarios: {
    ui: {
      executor: "constant-vus",
      vus: 3,
      duration: "10s",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },
  thresholds: {
    checks: ["rate==1.0"],
    browser_web_vital_fid: ["p(75) <= 100"], 
    browser_web_vital_lcp: ["p(75) <= 2500"], 
  },
  summaryTrendStats: ["min", "med", "avg", "max", "p(75)", "p(95)", "p(99)"],
  ext: {
    loadimpact: {
      projectID: 3747848, 
      name: "Teste de Login",
    },
  },
};


export default async function () {
  const page = await browser.newPage();

  try {
    // Navega até a página de login
    await page.goto("https://e2eburguer.netlify.app", { waitUntil: "networkidle" });

    // Preenche formulário
    await page.locator("#email").type("gestao@e2eburguer.com.br");
    await page.locator("#password").type("Teste@123!");

    // Localiza o botão de envio
    const submitButton = page.locator('button[type="submit"]');

    // Aguarda até que o botão esteja visível
    await submitButton.waitFor({ state: "visible", timeout: 10000 });

    // Verifica se o botão está habilitado
    const isButtonEnabled = await submitButton.isEnabled();
    if (!isButtonEnabled) {
      throw new Error("O botão de envio não está habilitado.");
    }


    // Clica no botão e aguarda a navegação
    await Promise.all([
      submitButton.click(),
      page.waitForNavigation({ timeout: 10000 }), 
    ]);


    // Verifica a saudação do usuário
    const greetingElement = page.locator('[data-testid="user-greeting"]');
    const userGreeting = await greetingElement.textContent();

    // Valida a saudação
    check(userGreeting, {
      "A saudação está correta": (text) => text.includes("Olá, Gestão!"),
    });


  //  await sleep(1);
  } catch (error) {
    console.error("Erro durante a execução do teste:", error);
  } finally {
    // Fecha a página
    await page.close();
    console.log("Página fechada.");
  }
}

