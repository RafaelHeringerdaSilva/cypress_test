const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
    timestamp: 'mmddyyy_HHMMss',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      reporterOptions:{

      }

    },
  },
});
