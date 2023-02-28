import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItemPreview.module.scss';
import Image from '~/components/Image';
import { TickIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';

const cx = classNames.bind(styles)

function AccountItemPreview({ data, profile = false }) {
    return (
        <PopperWrapper className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src={profile ? data.user.avatar : data.avatar} alt={profile ? data.user.full_name : data.full_name} />
                {profile
                    ? <Button outline medium>Follow</Button>
                    : <Button primary>Follow</Button>
                }
            </div>
            <Link to={`/@/${profile ? data.user.nickname : data.nickname}`} >
                <span className={cx('name')}>{profile ? data.user.nickname : data.nickname}</span>
                {profile ? data.user.tick : data.tick && <TickIcon className={cx('tick-blue')} />}
            </Link >
            <Link to={`/@/${profile ? data.user.nickname : data.nickname}`} className={cx('username')}>{profile ? data.user.full_name : data.full_name}</Link>
            <p className={cx('footer')}>
                <span className={cx('user-count')}>{profile ? data.user.followers_count : data.followers_count}</span>
                <span className={cx('user-like')}>Follwers</span>
                <span className={cx('user-count')}>{profile ? data.user.likes_count : data.likes_count}M</span>
                <span className={cx('user-like')}>Likes</span>
            </p>
            {profile &&
                <p className={cx('profile')}>
                    {data.user.bio}
                </p>}

        </PopperWrapper>
    );
}
AccountItemPreview.propTypes = {
    data: PropTypes.object.isRequired,
    profile: PropTypes.bool
}
export default AccountItemPreview;