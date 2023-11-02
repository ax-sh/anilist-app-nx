import { graphql, http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/resource', () => HttpResponse.json({ id: 'abc-123' })),
  graphql.query('ListPosts', ({ query }) => {
    console.log('Intercepted a "ListPosts" GraphQL query:', query);
  }),
];
