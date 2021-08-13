/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createUseStyles, ThemeProvider } from 'react-jss';
import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  },
  a11y: {
    config: {
      rules: [
        {
          id: 'autocomplete-valid',
          enabled: false
        }
      ]
    }
  }
};

const useStyles = createUseStyles({
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    '*': {
      boxSizing: 'inherit'
    }
  }
});

const withThemeProvider = (Story, context) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Story classes={classes} {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
