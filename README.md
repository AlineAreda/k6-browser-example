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


## ## 📈 **Análise das Métricas**

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


-   **LCP**: Tempo até o maior elemento de conteúdo ser renderizado. **Bom (< 2.5s)**.
    
-   **FID**: Tempo de resposta da primeira interação. **Ótimo (< 100ms)**.
    
-   **CLS**: Deslocamento inesperado do layout. **Ótimo (< 0.1)**.
    
-   **FCP**: Primeira pintura de qualquer conteúdo. **Precisa melhorar (< 1.8s recomendado)**.
    
-   **INP**: Latência das interações na página. **Ótimo (< 200ms)**.
    
-   **TTFB**: Tempo de resposta inicial do servidor. **Precisa melhorar (< 800ms recomendado)**.
    

> 🚀 **Sugestão de melhoria**: Reduzir o **TTFB** e otimizar o **FCP** para melhorar o carregamento inicial da página.

----------

## 📌 Relatórios de Teste

Os relatórios podem ser visualizados de duas formas:

1.  **Via linha de comando** com os logs do k6.
    
2.  **Via Grafana Cloud**, conectando o k6 ao Grafana para visualização das métricas em tempo real.
    
  ![Grafana](https://github.com/user-attachments/assets/9a17839f-9ed1-4ccb-a21a-d2c1ee9ba9d9)

----------

## 📌 Conclusão

Este projeto fornece um fluxo de testes automatizados com k6/browser para validar a performance e funcionalidade do login na aplicação **E2E Burger**. Os relatórios gerados ajudam na otimização do tempo de resposta da página e na identificação de possíveis melhorias na aplicação.

Para mais informações, consulte a documentação do [K6](https://grafana.com/docs/k6/latest/using-k6-browser/) 🚀
