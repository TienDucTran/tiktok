import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styles from './Button.module.scss'
import Theme from "~/layouts/component/Theme";

const cx = classNames.bind(styles)

function Button({ to,
    href,
    children,
    primary = false,
    upload = false,
    outline = false,
    disable = false,
    rounded,
    small = false,
    large = false,
    circle,
    icon,
    theme = false,
    className,
    onClick,
    ...passProps }) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }
    //! remove event listener when btn is disable
    if (disable) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function')
                delete props[key];
        })
    }
    if (to) {
        props.to = to
        Comp = Link
    }
    if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        upload,
        outline,
        disable,
        rounded,
        small,
        large,
        circle,
        [className]: className,
    })
    return (
        <Comp className={classes} {...props}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span >{children}</span>
            {theme && <Theme />}
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    upload: PropTypes.bool,
    outline: PropTypes.bool,
    disable: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    circle: PropTypes.bool,
    icon: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;