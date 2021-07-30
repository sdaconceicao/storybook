import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './Input.styles';

const Input = ({
  id,
  className,
  ...props
}) => {
  const classes = useStyles(props);
  return (
    <input {...props}
           className={`${className} ${classes.input}`}
    />
  );
};

Input.propTypes = {
  /** HTML id */
  id: PropTypes.string.isRequired,
  /** Name attribute */
  name: PropTypes.string.isRequired,
  /** Custom classes applied to label wrapping component */
  className: PropTypes.string,
  /** Boolean to indicate whether or not you want the standard inline layout */
  inline: PropTypes.bool,
  /** onChange function */
  onChange: PropTypes.func
};

Input.defaultProps = {
  className: '',
  inputClass: '',
  inline: false
};

export default Input;

