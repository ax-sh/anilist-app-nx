declare module '*/*.gqlanime-list.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const Anime: DocumentNode;

  export default defaultDocument;
}

declare module '*/*.gqluser-profile.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AnilistUserProfileQuery: DocumentNode;

  export default defaultDocument;
}
