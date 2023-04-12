const { defineConfig } = require("cypress");

const createBundler  = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const {createEsbuildPlugin}  = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: 'exk98z',
  e2e: {
    baseUrl: 'http://localhost:1234',
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