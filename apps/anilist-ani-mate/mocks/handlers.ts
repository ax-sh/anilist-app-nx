import { http, HttpResponse } from 'msw';
import { UserAnimeListMockData } from './mock-data/userAnimeListMockData';

import { anilistMockLink } from './index';

export const handlers = [
  // http.get('/resource', () => HttpResponse.json({ id: 'abc-123' })),
  anilistMockLink.query('UserAnimeList', ({ query }) =>
    HttpResponse.json(UserAnimeListMockData, { status: 200 }),
  ),
];
