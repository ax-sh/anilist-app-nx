import type { Meta, StoryObj } from '@storybook/react';
import { UserAnimeList } from './user-anime-list';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { graphql, HttpResponse } from 'msw';
import { UserAnimeListMockData } from '../mocks/mock-data/userAnimeListMockData';
import { MockedProvider } from '@apollo/client/testing';
import { anilistLink } from '../app/constants';
import {
  ApolloClient,
  ApolloProvider,
  from,
  InMemoryCache,
} from '@apollo/client';
import { httpLink } from '../app/apollo-provider-wrapper'; // Use for Apollo Version 3+

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
    await expect(canvas.getByText(/Welcome to UserAnimeList!/gi)).toBeTruthy();
  },
};

function AnilistStorybookProvider({ children }) {
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
      anilistLink.query('UserAnimeList', ({ query }) =>
        HttpResponse.json(UserAnimeListMockData, { status: 201 }),
      ),
    ],
  },
};
