import { graphql } from 'msw';

export const NEXT_PUBLIC_ANILIST_GRAPHQL_API_URL =
  'https://graphql.anilist.co' as const;

export const anilistLink = graphql.link(NEXT_PUBLIC_ANILIST_GRAPHQL_API_URL);
