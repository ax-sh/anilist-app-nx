import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { join } from 'path';
import { nextui } from '@nextui-org/react';

const { withTV } = require('tailwind-variants/transformer');

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
    ),
    ...createGlobPatternsForDependencies(__dirname),
    join(
      __dirname,
      '../../',
      './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ),
  ],
  darkMode: 'class',
  plugins: [nextui(), require('@tailwindcss/typography')],
  theme: {
    extend: {},
  },
});
