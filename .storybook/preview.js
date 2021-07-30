/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createUseStyles, ThemeProvider } from 'react-jss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  }
};

const useStyles = createUseStyles({
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    '.sb-show-main.sb-main-padded': {
      padding: 0
    },
    '*': {
      boxSizing: 'inherit'
    }
  }
});

const withThemeProvider = (Story, context) => {
  const classes = useStyles();
  return (
    <ThemeProvider >
      <Story classes={classes} {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
