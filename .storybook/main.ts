module.exports = {
  // Path to your stories
  stories: ['../src/**/*.stories.tsx'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook'
  ],

  webpackFinal: async (config) => {
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  docs: {
    autodocs: true
  }
};
