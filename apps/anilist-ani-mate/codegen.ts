// import { CodegenConfig } from '@graphql-codegen/cli'

type CodegenConfig = any;
const config: CodegenConfig = {
  schema: 'https://anilist.co/graphiql',
  documents: [
    '/Users/axmin/Desktop/PROJECT/anilist-app-nx/auth/src/lib/graphql/**/*.gql',
  ],
  generates: {
    './': {
      preset: 'client',
    },
  },
};

export default config;
