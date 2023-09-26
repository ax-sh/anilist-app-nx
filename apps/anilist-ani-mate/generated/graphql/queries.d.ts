declare module '*/*.gqlanime-list.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AnimeQuery: DocumentNode;

  export default defaultDocument;
}

declare module '*/*.gqluser-profile.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AnilistUserProfileQuery: DocumentNode;

  export default defaultDocument;
}
