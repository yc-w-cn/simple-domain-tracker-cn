import type { Meta, StoryObj } from "@storybook/react";

import { CopyrightText } from "./CopyrightText";

const meta: Meta<typeof CopyrightText> = {
  component: CopyrightText,
};

export default meta;

type Story = StoryObj<typeof CopyrightText>;

export const Personal: Story = {
  args: {
    name: 'Yuchen Wang',
  },
};

export const Longzai: Story = {
  args: {
    name: 'Longzai',
  },
};
