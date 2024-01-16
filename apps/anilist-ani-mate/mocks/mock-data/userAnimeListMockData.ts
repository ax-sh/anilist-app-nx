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

export const AnimeCharactersMockData = {
  data: {
    Media: {
      id: 130592,
      title: {
        romaji: 'Hataraku Maou-sama!!',
        userPreferred: 'Hataraku Maou-sama!!',
        native: '\u306f\u305f\u3089\u304f\u9b54\u738b\u3055\u307e\uff01\uff01',
        english: 'The Devil is a Part-Timer! Season 2',
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
      characters: {
        nodes: [
          {
            gender: 'Male',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b70733-NbXODXdXT2a8.jpg',
              __typename: 'CharacterImage',
            },
            name: { userPreferred: 'Satan Jacob', __typename: 'CharacterName' },
            id: 70733,
            favourites: 2207,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Female',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b70735-DmmbHRLKpS0E.png',
              __typename: 'CharacterImage',
            },
            name: {
              userPreferred: 'Emilia Justina',
              __typename: 'CharacterName',
            },
            id: 70735,
            favourites: 1313,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Male',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b70737-lDeBmECttJCK.png',
              __typename: 'CharacterImage',
            },
            name: { userPreferred: 'Alciel', __typename: 'CharacterName' },
            id: 70737,
            favourites: 835,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Male',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b83103-fksjOXqJCmxd.png',
              __typename: 'CharacterImage',
            },
            name: { userPreferred: 'Lucifer', __typename: 'CharacterName' },
            id: 83103,
            favourites: 941,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Female',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b70739-rJpfVU2YH5nS.png',
              __typename: 'CharacterImage',
            },
            name: {
              userPreferred: 'Chiho Sasaki',
              __typename: 'CharacterName',
            },
            id: 70739,
            favourites: 700,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Female',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b83105-NoBGyXWCvlW2.jpg',
              __typename: 'CharacterImage',
            },
            name: {
              userPreferred: 'Crestia Bell',
              __typename: 'CharacterName',
            },
            id: 83105,
            favourites: 394,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Female',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b158748-fZ530q2Fc2Ur.png',
              __typename: 'CharacterImage',
            },
            name: { userPreferred: 'Alas Ramus', __typename: 'CharacterName' },
            id: 158748,
            favourites: 132,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Female',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b83463-juPSiLKxkgxD.png',
              __typename: 'CharacterImage',
            },
            name: { userPreferred: 'Rika Suzuki', __typename: 'CharacterName' },
            id: 83463,
            favourites: 45,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Female',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b82295-BOIpFzFPOzvS.jpg',
              __typename: 'CharacterImage',
            },
            name: {
              userPreferred: 'Mayumi Kisaki',
              __typename: 'CharacterName',
            },
            id: 82295,
            favourites: 56,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Female',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b83465-tELCjsvutR3D.png',
              __typename: 'CharacterImage',
            },
            name: {
              userPreferred: 'Emeralda Etuva',
              __typename: 'CharacterName',
            },
            id: 83465,
            favourites: 35,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Male',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b84873-AWwWG8P66Sze.png',
              __typename: 'CharacterImage',
            },
            name: {
              userPreferred: 'Mitsuki Sarue',
              __typename: 'CharacterName',
            },
            id: 84873,
            favourites: 17,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: null,
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b278686-VgPjR6VyMYS8.jpg',
              __typename: 'CharacterImage',
            },
            name: { userPreferred: 'Gabriel', __typename: 'CharacterName' },
            id: 278686,
            favourites: 10,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Female',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b278687-PMZZDeahEZKL.png',
              __typename: 'CharacterImage',
            },
            name: { userPreferred: 'Lyra', __typename: 'CharacterName' },
            id: 278687,
            favourites: 7,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: null,
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b278689-aHSWY4Yaz5SK.jpg',
              __typename: 'CharacterImage',
            },
            name: { userPreferred: 'Camio', __typename: 'CharacterName' },
            id: 278689,
            favourites: 4,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: null,
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b36309-yRLEQYd2dDI5.jpg',
              __typename: 'CharacterImage',
            },
            name: { userPreferred: 'Narrator', __typename: 'CharacterName' },
            id: 36309,
            favourites: 1695,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: null,
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b83467-1G4LmD77QPdM.png',
              __typename: 'CharacterImage',
            },
            name: { userPreferred: 'Albert Ende', __typename: 'CharacterName' },
            id: 83467,
            favourites: 5,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Female',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b285253-k5qbeYMeHeOf.png',
              __typename: 'CharacterImage',
            },
            name: {
              userPreferred: 'Amane Ooguro',
              __typename: 'CharacterName',
            },
            id: 285253,
            favourites: 15,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Female',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b83887-5PY5X9scHor9.png',
              __typename: 'CharacterImage',
            },
            name: {
              userPreferred: 'Kaori Shouji',
              __typename: 'CharacterName',
            },
            id: 83887,
            favourites: 7,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Female',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b83461-Cys6adrlUMwg.png',
              __typename: 'CharacterImage',
            },
            name: { userPreferred: 'Miki Shiba', __typename: 'CharacterName' },
            id: 83461,
            favourites: 12,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Male',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b315132-xZ903hzNe1Vy.jpg',
              __typename: 'CharacterImage',
            },
            name: { userPreferred: 'Raguel', __typename: 'CharacterName' },
            id: 315132,
            favourites: 0,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Male',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b83603-2GHUaHmDA5fn.png',
              __typename: 'CharacterImage',
            },
            name: {
              userPreferred: 'Senichi Sasaki',
              __typename: 'CharacterName',
            },
            id: 83603,
            favourites: 2,
            isFavourite: false,
            __typename: 'Character',
          },
          {
            gender: 'Female',
            image: {
              large:
                'https://s4.anilist.co/file/anilistcdn/character/large/b83605-GK9ntHAeKyiW.png',
              __typename: 'CharacterImage',
            },
            name: { userPreferred: 'Riho Sasaki', __typename: 'CharacterName' },
            id: 83605,
            favourites: 3,
            isFavourite: false,
            __typename: 'Character',
          },
        ],
        __typename: 'CharacterConnection',
      },
    },
  },
};
