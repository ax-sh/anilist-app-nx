const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  plugins: [
    'pii',
    'no-secrets',
    'perfectionist',
    'write-good-comments',
    'perfectionist',
    'deprecation',
  ],
  extends: [
    'plugin:pii/recommended',
    'plugin:deprecation/recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:deprecation/recommended',
  ],
  rules: {
    'write-good-comments/write-good-comments': 'warn',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-explicit-any': [
      'warn',
      {
        fixToUnknown: true,
      },
    ],
    'no-secrets/no-secrets': 'error',
    'perfectionist/sort-objects': [
      'error',
      {
        type: 'natural',
        order: 'asc',
      },
    ],
  },
  overrides: [
    {
      files: ['*.d.ts', 'env.ts', 'generated/**/*'],
      extends: ['plugin:pii/recommended'],
      rules: {
        'pii/no-email': 'off',
        'pii/no-dob': 'off',
        'pii/no-ip': 'off',
        'pii/no-phone-number': 'off',
        'no-secrets/no-secrets': 'off',
      },
    },
  ],
});
