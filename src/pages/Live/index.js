import classNames from 'classnames/bind';
import styles from './Live.module.scss';
const cx = classNames.bind(styles);
function Live() {
    return (
        <div div className={cx('Wrapper')}>
            <div>LIVE page</div>
        </div>
    );
}

export default Live;
