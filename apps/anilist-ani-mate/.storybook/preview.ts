import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize();

const preview = {
  parameters: {
    // your other code...
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
  addons: [
    // Other Storybook addons
    '@storybook/addon-interactions', // 👈 Register the addon
  ],
};

export default preview;
