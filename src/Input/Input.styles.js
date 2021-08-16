import { createUseStyles } from 'react-jss'

export default createUseStyles({
  input: {
    height: 16,
    width: ({inline}) => inline ? 'inherit' : '100%',
    display: ({inline}) => inline ? 'inline-block' : 'block',
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
