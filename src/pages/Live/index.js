
import classNames from "classnames/bind";
import styles from './Live.module.scss'
const cx = classNames.bind(styles)
function Live() {
    return (
        <div div className={cx('Wrapper')}>
            <h2>LIVE page</h2>
        </div>
    );
}

export default Live;