import { http, HttpResponse } from 'msw';
import { UserAnimeListMockData } from './mock-data/userAnimeListMockData';
import { anilistLink } from '../app/constants';

export const handlers = [
  // http.get('/resource', () => HttpResponse.json({ id: 'abc-123' })),
  anilistLink.query('ListPosts', ({ query }) => {
    console.log('Intercepted a "ListPosts" GraphQL query:', query);
    return HttpResponse.json({
      data: {
        // Convert all posts to an array
        // and return as the "posts" root-level property.
        posts: { k: 9 },
      },
    });
  }),
  anilistLink.query('UserAnimeList', ({ query }) =>
    HttpResponse.json(UserAnimeListMockData, { status: 201 }),
  ),
];
