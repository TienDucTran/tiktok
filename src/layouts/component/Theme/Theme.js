import classNames from 'classnames/bind';
import { useContext } from 'react';

import styles from './Theme.module.scss';
import { ThemeContext } from '~/context';

const cx = classNames.bind(styles);
function Theme() {
    const value = useContext(ThemeContext);
    return (
        <label className={cx('wrapper', value.theme)}>
            <button
                onClick={value.handleClick}
                className={cx('btn-change')}
            ></button>
        </label>
    );
}

export default Theme;
