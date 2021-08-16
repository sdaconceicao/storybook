import { create } from '@storybook/theming';
import logo from './logo.png';

export default create({
  base: 'dark',

  colorPrimary: 'red',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'grey',
  appContentBg: 'lightgray',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'grey',

  // Form colors
  inputBg: 'grey',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'A Demo Storybook',
  brandImage: logo,
  brandUrl: 'https://www.nhl.com/penguins'
});
