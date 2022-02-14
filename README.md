# Projeto de automação - Sicred
| Tecnologias: | ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e) |![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) | ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) |![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)
|-------|--------|----|--------|---
<br>

### Verificação de ambiente
- [x] NodeJS instalado na maquina? Verifique:
```
node -v
```
- [x] [Baixar repositório](https://github.com/wbrunoFC/Automacao-api-sicred)
- [x] Excute o comando para baixar as dependencias do projeto: 
```
npm install
```
### Executar projeto
- [x] Executar testes via interface:
```
npm run cy:inerface
```
- [x] Executar testes headless:
```
npm run cy:headless
```
- [x] Executar dashboard report:
```
allure generate allure-results --clean -o allure-report
```
