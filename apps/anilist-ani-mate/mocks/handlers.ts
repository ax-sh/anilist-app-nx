import { http, HttpResponse } from 'msw';
import { UserAnimeListMockData } from './mock-data/userAnimeListMockData';
import { anilistLink } from '../app/constants';

export const handlers = [
  // http.get('/resource', () => HttpResponse.json({ id: 'abc-123' })),
  anilistLink.query('UserAnimeList', ({ query }) =>
    HttpResponse.json(UserAnimeListMockData, { status: 200 }),
  ),
];
