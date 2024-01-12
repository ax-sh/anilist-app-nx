import { initialize, mswLoader } from 'msw-storybook-addon';
import process from 'process';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';

// Initialize MSW
initialize();

if (process.env.NODE_ENV === 'development') {
  // NOTE: Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

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
