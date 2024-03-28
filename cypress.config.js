const { defineConfig } = require("cypress");

const createBundler  = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const {createEsbuildPlugin}  = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: 'j9dbq2',
  e2e: {
    baseUrl: 'http://automationpratice.com.br/',
    // specPattern: "**/*.feature",
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      
      addCucumberPreprocessorPlugin(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});

// npx cypress run --record --key a854e622-b321-4d8b-b74e-cc0b1b06360d