import React from 'react';
import classNames from 'classnames'
import PropTypes from "prop-types";
function  Button({onCLick, className, outline, children}) {
    return(
        <button
            onClick={onCLick}
            className={classNames('button', className, {
            'button--outline': outline,
        })}>
            {children}
        </button>
    )
}

Button.propTypes = {
    name: PropTypes.func,
};
export default Button;