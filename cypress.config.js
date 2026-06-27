require('dotenv').config();
const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config);
      return config;
    },
    baseUrl: 'https://api.clickup.com/api/v2',
    env: {
      token: process.env.CLICKUP_TOKEN,
      folderID: process.env.CLICKUP_FOLDER_ID,
      invalidToken: process.env.CLICKUP_INVALID_TOKEN
    }

  },
});
