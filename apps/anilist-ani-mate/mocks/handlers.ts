import { http, HttpResponse } from 'msw';
import { UserAnimeListMock } from './mock-data/userAnimeList.mock';

import { anilistMockLink } from './index';

export const handlers = [
  // http.get('/resource', () => HttpResponse.json({ id: 'abc-123' })),
  anilistMockLink.query('UserAnimeList', ({ query }) =>
    HttpResponse.json(UserAnimeListMock, { status: 200 }),
  ),
];
