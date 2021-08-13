module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|mdx)','../src/**/*.stories.@(js|jsx|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls'
  ],
  features: {
    previewCsfV3: true,
  }
};
