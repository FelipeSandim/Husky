const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nmtwq8',
  e2e: {
    supportFile: false,  // Desativa o arquivo de suporte
    setupNodeEvents(on, config) {
      // Aqui você pode adicionar event listeners de node se necessário
    },
    viewportWidth: 1380,
    viewportHeight: 820,
  },
});