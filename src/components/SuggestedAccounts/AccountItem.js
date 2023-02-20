import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './SuggestedAccounts.module.scss'
import Image from '~/components/Image';
import { TickIcon } from '~/components/Icons';

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@/${data.nickname}`} className={cx('account-item')} >
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.nickname}</span>
                    {/* {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />} */}
                    {data.tick && <TickIcon className={cx('tick-blue')} />}
                </p>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}
export default AccountItem;