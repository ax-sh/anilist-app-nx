import { faker } from '@faker-js/faker';

function genMedia() {
  return {
    media: {
      id: 130592,
      title: {
        romaji: faker.company.name(),
        __typename: 'MediaTitle',
      },
      coverImage: {
        extraLarge:
          'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130592-LAUlhx15mxQu.jpg',
        __typename: 'MediaCoverImage',
      },
      idMal: 48413,
      status: 'FINISHED',
      __typename: 'Media',
    },
    __typename: 'MediaList',
  };
}

export const UserAnimeListMockData = {
  data: {
    MediaListCollection: {
      lists: [
        {
          entries: faker.helpers.multiple(genMedia, { count: 10 }),
          __typename: 'MediaListGroup',
        },
      ],
      __typename: 'MediaListCollection',
    },
  },
};
