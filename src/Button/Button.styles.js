import { createUseStyles } from 'react-jss'

export default createUseStyles({
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
  }

})
