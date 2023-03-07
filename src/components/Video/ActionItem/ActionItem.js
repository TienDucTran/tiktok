import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import styles from './ActionItem.module.scss'

const cx = classNames.bind(styles)

function ActionItem({ data, children }) {
    return (
        <button className={cx('wrapper')}>
            <div className={cx('icon-wrapper')}>
                {children}
            </div>
            <strong className={cx('strong-text')}>{data}</strong>
        </button>
    );
}
ActionItem.propTypes = {
    children: PropTypes.node.isRequired,
    // data: PropTypes.node.isRequired
}
export default ActionItem;