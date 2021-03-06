const injectCraDevServer = require("@cypress/react/plugins/react-scripts");

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  injectCraDevServer(on, { ...config, addTranspiledFolders: [".storybook"] });

  return config;
};
