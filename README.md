# 📌 Exemplo de teste de Performance e UI com k6/browser

Este projeto utiliza **k6/browser** para realizar testes de performance e UI na aplicação [E2E Burger](https://e2eburguer.netlify.app). O objetivo é validar a performance do carregamento da página e garantir que o fluxo de login funcione corretamente.

----------

## 🚀 Tecnologias Utilizadas

-   [k6](https://k6.io/) - Ferramenta de testes de carga e performance.
    
-   k6/browser - Extensão do k6 para testes de UI e automação.
    
-   [Grafana Cloud](https://grafana.com/) - Para análise dos resultados de testes.
    

----------

## 📂 Estrutura do Projeto

```
📁 K6-BROWSER-EXAMPLE
 ├── 📂 scripts
 │    ├── login.js   # Script principal do teste de login
 ├── README.md      # Documentação do projeto
```

----------

## 🔧 Instalação e Configuração

1.  **Instale o k6**
    
    ```
    choco install k6  # Windows
    brew install k6  # macOS
    ```
Ou baixe diretamente através da documentação do [K6](https://grafana.com/docs/k6/latest/)
    
###  **Executar Testes na Nuvem com Grafana K6 Cloud**

#### 🔹 Criar conta no **Grafana K6 Cloud**

Cadastre-se gratuitamente em: https://grafana.com/products/cloud/k6/

Você precisará do **ID do projeto** e do **seu token de usuário** para rodar os testes na nuvem.

  #### 🔹 **Autenticação no terminal antes da execução**

```
k6 login cloud --token <TOKEN>
```

#### 🔹 **Executar teste diretamente na nuvem**

```
k6 cloud scripts/login.js
```

#### 🔹 **Executar localmente e enviar resultados para a nuvem**

```
k6 run --out cloud scripts/login.js
```


----------

 Exemplo de um teste bem-sucedido no Grafana:

## 📌 Configuração do Script de Teste

O script `login.js` executa os seguintes passos:

1.  Abre a página de login
    
2.  Preenche os campos de email e senha
    
3.  Verifica se o botão de login está habilitado
    
4.  Clica no botão e aguarda a navegação
    
5.  Valida se a saudação do usuário está correta
    

----------


## 📈 **Análise das Métricas**

### 🔍 **Resumo das Métricas Coletadas**


|    📊 Métrica            |Valor                      |status                        |
|----------------|-------------------------------|-----------------------------|
|**LCP** (Largest Contentful Paint)|`2.09s`         |✅ **Bom**            |
|**FID** (First Input Delay)       |`1ms`         |✅ **Bom**            |
|**CLS** (Cumulative Layout Shift)     |`0.00`   |✅ **Bom**            |
|**FCP** (First Contentful Paint)     |`1.83s`   |⚠️ **Melhoria Necessária**  |
|**INP** (Interaction to Next Paint)    |`8ms`    |✅ **Bom**            |
|**TTFB** (Time to First Byte)       |`1686ms`|⚠️ **Melhoria Necessária**|


### 📌 **Interpretação das Métricas**


-  **LCP (Largest Contentful Paint)**

   -  **O que significa:**  O LCP mede o tempo que leva para o maior elemento visível na tela (como uma imagem ou bloco de texto) ser carregado.
    
   -   **Análise:**  Um LCP de 2.09s está próximo do limite recomendado pelo Google, que é de 2.5s. Isso indica que apesar de estar dentro do limite, o conteúdo principal da página está demorando um pouco para ser exibido.
    
   -   🚀 **Melhorias:**
    
    -   **Otimizar imagens:**  Comprimir e redimensionar imagens para reduzir o tempo de carregamento.
        
    -   **Usar CDN:**  Utilizar uma Content Delivery Network (CDN) para servir conteúdo estático mais rapidamente.
        
    -   **Pré-carregar recursos críticos:**  Usar  `<link rel="preload">`  para carregar recursos importantes mais cedo.
        

-  **FID (First Input Delay)**

   -   **O que significa:**  O FID mede o tempo que leva para a página responder à primeira interação do usuário (como um clique).
    
   -   **Análise:**  Um FID de 1ms é excelente, indicando que a página responde quase instantaneamente às interações do usuário.
    
   -   **Melhorias:**  Nenhuma melhoria necessária, pois o valor já é ideal.
    

-    **CLS (Cumulative Layout Shift)**

     -   **O que significa:**  O CLS mede a estabilidade visual da página, ou seja, quanto os elementos da página se movem durante o carregamento.
    
     -   **Análise:**  Um CLS de 0.00 é excelente, indicando que não há mudanças de layout durante o carregamento, o que proporciona uma experiência de usuário estável.
    
     -  🚀 **Melhorias:**  Nenhuma melhoria necessária, pois o valor já é ideal.
    

- **FCP (First Contentful Paint)**

    -   **O que significa:**  O FCP mede o tempo que leva para o primeiro conteúdo (texto, imagem, etc.) ser renderizado na tela.
    
    -   **Análise:**  Um FCP de 1.83s está dentro do limite recomendado (1.8s a 3s), mas pode ser melhorado para uma experiência mais rápida.
    
     -  🚀 **Melhorias:**
    
         -   **Minificar CSS e JavaScript:**  Reduzir o tamanho dos arquivos CSS e JS para acelerar o carregamento.
        
         -   **Remover recursos bloqueantes:**  Identificar e remover scripts ou estilos que bloqueiam a renderização.
        

-  **INP (Interaction to Next Paint)**

    -   **O que significa:**  O INP mede o tempo que leva para a página responder a interações do usuário, como cliques ou rolagens.
    
     -   **Análise:**  Um INP de 8ms é excelente, indicando que a página responde rapidamente às interações do usuário.
    
     -  🚀 **Melhorias:**  Nenhuma melhoria necessária, pois o valor já é ideal.
    

-  **TTFB (Time to First Byte)**

     -   **O que significa:**  O TTFB mede o tempo que leva para o navegador receber o primeiro byte de dados do servidor.
    
    - **Análise:**  Um TTFB de 1686ms (1.686s) é alto, indicando que o servidor está demorando para responder. Isso pode impactar negativamente a experiência do usuário.
    
    - 🚀  **Melhorias:**
    
    -   **Otimizar o servidor:**  Verificar a configuração do servidor e otimizar o tempo de resposta.
        
    -   **Usar cache:**  Implementar cache no servidor para reduzir o tempo de resposta para solicitações repetidas.
        
    -   **Reduzir o tempo de consulta ao banco de dados:**  Se aplicável, otimizar consultas ao banco de dados para reduzir o tempo de processamento.
        

### Resumo das Melhorias:

-   **Otimizar imagens e usar CDN**  para melhorar o LCP.
    
-   **Minificar CSS e JavaScript**  e  **remover recursos bloqueantes**  para melhorar o FCP.
    
-   **Otimizar o servidor**  e  **implementar cache**  para reduzir o TTFB.
    
-   **Manter o FID, CLS e INP**  como estão, pois já estão em níveis excelentes.

----------
📌 Para mais informações, consulte a documentação [web.dev](https://web.dev/baseline?hl=pt-br)

## 📊 Relatórios de Teste

Os relatórios podem ser visualizados de duas formas:

1.  **Via linha de comando** com os logs do k6.
    
2.  **Via Grafana Cloud**, conectando o k6 ao Grafana para visualização das métricas em tempo real.
    
  ![Grafana](https://github.com/user-attachments/assets/9a17839f-9ed1-4ccb-a21a-d2c1ee9ba9d9)

----------

## 📌 Conclusão

Este projeto fornece um fluxo de testes automatizados com k6/browser para validar a performance e funcionalidade do login na aplicação **E2E Burger**. Os relatórios gerados ajudam na otimização do tempo de resposta da página e na identificação de possíveis melhorias na aplicação.

Para mais informações, consulte a documentação do [K6](https://grafana.com/docs/k6/latest/using-k6-browser/) 🚀
