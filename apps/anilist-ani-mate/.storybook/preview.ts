import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon';
import process from 'process';
import { loadDevMessages, loadErrorMessages } from '@apollo/client/dev';
import '../app/global.scss';
// Initialize MSW
initialize();
// Provide the MSW addon decorator globally
// export const decorators = [mswDecorator];

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
    'storybook-addon-apollo-client',
  ],
};

export default preview;
