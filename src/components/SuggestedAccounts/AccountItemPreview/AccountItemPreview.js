import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItemPreview.module.scss';
import Image from '~/components/Image';
import { TickIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';

const cx = classNames.bind(styles)

function AccountItemPreview({ data }) {
    return (
        <PopperWrapper className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
                <Button primary>Follow</Button>
            </div>
            <Link to={`/@/${data.nickname}`} >
                <span className={cx('name')}>{data.nickname}</span>
                {data.tick && <TickIcon className={cx('tick-blue')} />}
            </Link >
            <Link to={`/@/${data.nickname}`} className={cx('username')}>{data.full_name}</Link>
            <p className={cx('footer')}>
                <span className={cx('user-count')}>{data.followers_count}M</span>
                <span className={cx('user-like')}>Follwers</span>
                <span className={cx('user-count')}>{data.likes_count}M</span>
                <span className={cx('user-like')}>Likes</span>
            </p>
        </PopperWrapper>
    );
}
AccountItemPreview.propTypes = {
    data: PropTypes.object.isRequired
}
export default AccountItemPreview;