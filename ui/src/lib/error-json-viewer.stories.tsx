import type { Meta, StoryObj } from '@storybook/react';
import { ErrorJsonViewer } from './error-json-viewer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ErrorJsonViewer> = {
  component: ErrorJsonViewer,
  title: 'ErrorJsonViewer',
};
export default meta;
type Story = StoryObj<typeof ErrorJsonViewer>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ErrorJsonViewer!/gi)).toBeTruthy();
  },
};
