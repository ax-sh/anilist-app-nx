import type { Meta, StoryObj } from '@storybook/react';
// import { Profile } from './profile';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

function ProfileView() {
  return <div>Welcome to Profile</div>;
}

const meta: Meta<typeof ProfileView> = {
  component: ProfileView,
  title: 'Profile',
};
export default meta;
type Story = StoryObj<typeof ProfileView>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    console.log(canvas, 222);
    await expect(canvas.getByText(/Welcome to Profile!/gi)).toBeTruthy();
  },
};
