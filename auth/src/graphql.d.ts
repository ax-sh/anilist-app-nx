declare module '*.gql' {
  // TODO add codegen for auto type casting graphql files
  import { DocumentNode } from 'graphql';

  const value: DocumentNode;
  export default value;
}
