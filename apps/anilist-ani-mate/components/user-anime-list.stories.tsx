import type { Meta, StoryObj } from '@storybook/react';
import { UserAnimeList } from './user-anime-list';

import { within, waitForElementToBeRemoved } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { HttpResponse } from 'msw';
import {
  AnimeCharactersMockData,
  UserAnimeListMock,
} from '../mocks/mock-data/userAnimeList.mock';
import { MockedProvider } from '@apollo/client/testing';
import {
  ApolloClient,
  ApolloProvider,
  from,
  InMemoryCache,
} from '@apollo/client';
import { httpLink } from '../app/apollo-provider-wrapper';
import { anilistMockLink } from '../mocks';
import { PropsWithChildren } from 'react'; // Use for Apollo Version 3+

const meta: Meta<typeof UserAnimeList> = {
  component: UserAnimeList,
  title: 'UserAnimeList',
};
export default meta;
type Story = StoryObj<typeof UserAnimeList>;

export const Primary: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loader = canvas.getByTestId(/loader/i);

    await expect(loader).toBeInTheDocument();
    await waitForElementToBeRemoved(() => canvas.queryByTestId(/loader/i));
    await expect(canvas.getByTestId(/UserAnimeList/i)).toBeInTheDocument();
  },
};

function AnilistStorybookProvider({ children }: PropsWithChildren) {
  const client = new ApolloClient({
    link: from([httpLink]),
    cache: new InMemoryCache(),

    ssrMode: typeof window === 'undefined',
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

Primary.decorators = [
  (Story) => (
    <AnilistStorybookProvider>
      {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
      <Story />
    </AnilistStorybookProvider>
  ),
];

Primary.parameters = {
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
  },
  msw: {
    handlers: [
      anilistMockLink.query('UserAnimeList', ({ query }) =>
        HttpResponse.json(UserAnimeListMock, { status: 201 }),
      ),
      anilistMockLink.query('Anime', ({ query, ...rest }) => {
        console.log(query, rest);
        return HttpResponse.json(AnimeCharactersMockData, { status: 200 });
      }),
    ],
  },
};
