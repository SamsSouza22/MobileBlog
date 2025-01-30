# MobileBlog

O projeto aborda um aplicativo móvel que exibe um blog como uma página web dentro de uma WebView.

## Tecnologias

Este projeto foi desenvolvido utilizando Expo, React Native e a biblioteca `react-native-webview`.

## Instalando o Projeto

1. Clonar o repositório:

    ```bash
    git clone https://github.com/SamsSouza22/MobileBlog.git
    cd MobileBlog
    ```

2. Instalar dependências:

    ```bash
    npm install
    ```

3. Iniciar o projeto:

    Para iOS:
    ```bash
    npx react-native run-ios
    ```

    Para Android:
    ```bash
    npx react-native run-android
    ```

## Estrutura do projeto

```
MobileBlog/
    .gitignore
    app/
        App.js
    node_modules/
    package.json
    README.md
```
- [app](http://_vscodecontentref_/0)
  - [App.js](http://_vscodecontentref_/1): O ponto de entrada da aplicação, contendo a configuração da WebView.

## Configuração da WebView

A WebView é configurada para carregar a URL `https://frontend-cvxux7qv9-samssouza22s-projects.vercel.app` e está estilizada para ocupar todo o espaço disponível na tela, com uma margem superior igual à altura da barra de status.

## Licença
This project is licensed under the ISC License.