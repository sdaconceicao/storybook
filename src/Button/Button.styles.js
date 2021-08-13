import { createUseStyles } from 'react-jss'

export default createUseStyles( theme => ({
  root: {
    margin: 10,
    padding: 10,
    fontSize: ({size}) => size === 'sm' ? 12 : size === 'md' ? 14 : 16,
    '&:disabled': {
      cursor: 'not-allowed',
      backgroundColor: '#EDEDED',
      color: '#EDEDED',
      opacity: 1
    },
    '&:focus': {
      outlineColor: 'blue'
    }
  },
  primary: {
    backgroundColor: theme.colorPrimary.bg,
    color: theme.colorPrimary.text
  },
  secondary: {
    backgroundColor: theme.colorSecondary.bg,
    color: theme.colorSecondary.text
  },
  tertiary: {
    backgroundColor: theme.colorTertiary.bg,
    color: theme.colorTertiary.text
  }
}));
