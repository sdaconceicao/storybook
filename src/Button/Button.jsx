import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './Button.styles';

const SM = 'sm';
const MD = 'md';
const LG = 'lg';

const Button = ({
  className,
  children,
  ...props
}) => {
  const classes = useStyles(props);
  return (
    <button {...props}
           className={`${className} ${classes.root}`}
    >{children}</button>
  );
};

Button.propTypes = {
  /** Button types */
  type: PropTypes.oneOf(['submit', 'button']),
  /** Custom classes applied to label wrapping component */
  className: PropTypes.string,
  /** onClick function */
  onClick: PropTypes.func,
  /** Boolean to indicate button is enabled */
  disabled: PropTypes.bool,
  /** Content of button */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Size of button */
  size: PropTypes.oneOf([SM, MD, LG])
};

Button.defaultProps = {
  className: '',
  inline: false,
  disabled: false,
  size: MD
};

export default Button;

