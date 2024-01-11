import type { Meta, StoryObj } from '@storybook/react';
import { UserAnimeList } from './user-anime-list';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
    expect(canvas.getByText(/Welcome to UserAnimeList!/gi)).toBeTruthy();
  },
};
