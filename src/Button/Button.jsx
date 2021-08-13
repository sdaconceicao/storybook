import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './Button.styles';

export const SM = 'sm';
export const MD = 'md';
export const LG = 'lg';

export const PRIMARY = 'primary';
export const SECONDARY = 'secondary';
export const TERTIARY = 'tertiary';

const Button = ({
  className,
  children,
  variant,
  ...props
}) => {
  const classes = useStyles(props);
  return (
    <button {...props}
           className={`${className} ${classes.root} ${classes[variant]}`}
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
  size: PropTypes.oneOf([SM, MD, LG]),
  /** Variant style of button */
  variant: PropTypes.oneOf([PRIMARY, SECONDARY, TERTIARY])
};

Button.defaultProps = {
  className: '',
  inline: false,
  disabled: false,
  size: MD,
  variant: PRIMARY
};

export default Button;

