import { createUseStyles } from 'react-jss'

export default createUseStyles({
  input: {
    height: 16,
    width: ({inline}) => inline ? '100%' : 'inherit',
    display: ({inline}) => inline ? 'block' : 'inline-block',
    borderRadius: 5,
    margin: 10,
    padding: 10,
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
