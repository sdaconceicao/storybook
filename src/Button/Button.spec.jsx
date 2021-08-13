import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories';
const { BasicUsage, Secondary, Tertiary, OnClickIncrement } = composeStories(stories);

describe('buttons', ()=>{
  it('renders primary button with default args', () => {
    const { getByText } = render(<BasicUsage />);
    const buttonElement = getByText('Lorem');
    expect(buttonElement).not.toBeNull();
  });

  it('renders secondary button with default args', () => {
    const { getByText } = render(<Secondary />);
    const buttonElement = getByText('Ipsum');
    expect(buttonElement).not.toBeNull();
  });

  it('renders tertiary button with default args', () => {
    const { getByText } = render(<Tertiary />);
    const buttonElement = getByText('Dolor');
    expect(buttonElement).not.toBeNull();
  });

  it('properly handles click events', () =>{
    const onClick = jest.fn();
    const { getByText } = render(<OnClickIncrement onClick={onClick}/>);
    const buttonElement = getByText('Click Me');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(getByText('Clicked 1 times')).toBeTruthy();
  })
})

