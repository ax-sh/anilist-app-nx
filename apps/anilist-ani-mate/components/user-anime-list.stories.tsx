import type { Meta, StoryObj } from '@storybook/react';
import { UserAnimeList } from './user-anime-list';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { graphql, HttpResponse } from 'msw';
import { UserAnimeListMockData } from '../mocks/mock-data/userAnimeListMockData';
import { AniMateProvider } from '../app/providers';
import { MockedProvider } from '@apollo/client/testing'; // Use for Apollo Version 3+

const meta: Meta<typeof UserAnimeList> = {
  component: UserAnimeList,
  title: 'UserAnimeList',
};
export default meta;
type Story = StoryObj<typeof UserAnimeList>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Welcome to UserAnimeList!/gi)).toBeTruthy();
  },
};

const anilist = graphql.link('https://graphql.anilist.co');

Heading.decorators = [
  (Story) => (
    <AniMateProvider>
      {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
      <Story />
    </AniMateProvider>
  ),
];

Heading.parameters = {
  apolloClient: {
    MockedProvider,
    // any props you want to pass to MockedProvider on every story
  },
  msw: {
    handlers: [
      anilist.query('UserAnimeList', ({ query }) =>
        HttpResponse.json(UserAnimeListMockData, { status: 201 }),
      ),
    ],
  },
};
