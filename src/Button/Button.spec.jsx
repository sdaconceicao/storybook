import React from 'react';
import { render } from '@testing-library/react';
import { composeStory } from '@storybook/testing-react';
import Meta, { BasicUsage as BasicUsageStory } from './Button.stories';
import { Button } from '../index';
const { BasicUsage } = composeStory(BasicUsageStory, Meta);

test('renders primary button with default args', () => {
  const { getByText } = render(<Button />);
  const buttonElement = getByText(
    /Text coming from args in stories file!/i
  );
  expect(buttonElement).not.toBeNull();
});
