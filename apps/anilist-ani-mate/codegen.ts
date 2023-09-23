import { CodegenConfig } from '@graphql-codegen/cli';

console.log(777);
const config: CodegenConfig = {
  schema: 'https://anilist.co/graphiql',
  documents: [
    '/Users/axmin/Desktop/PROJECT/anilist-app-nx/auth/src/lib/graphql/**/*.gql',
  ],
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
};

export default config;
