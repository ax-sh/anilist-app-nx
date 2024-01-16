import { graphql } from 'msw';
import { NEXT_PUBLIC_ANILIST_GRAPHQL_API_URL } from '../app/constants';

export const anilistMockLink = graphql.link(
  NEXT_PUBLIC_ANILIST_GRAPHQL_API_URL,
);
