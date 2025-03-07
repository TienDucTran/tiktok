import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { VideoItemProfile } from '../../components/Video/';

import Button from '~/components/Button';
import {
    EditIcon,
    LockIcon,
    MoreActionIcon,
    NoVideoIcon,
    ShareIconWhite,
    UnfollowIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import styles from './Profile.module.scss';
import * as userProfileService from '~/services/userProfileService';
import Share from '~/components/Popper/Share/Share';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);
const userProfileStructure = {
    avatar: '',
    bio: '',
    followers_count: 0,
    followings_count: 0,
    likes_count: 0,
    nickname: '',
    first_name: '',
    last_name: '',
    tick: false,
    videos: [],
};
function Profile() {
    const { nickname } = useParams();
    console.log(nickname);

    const isGuest = false;
    const [userProfile, setUserProfile] = useState(userProfileStructure);
    const {
        avatar,
        bio,
        followers_count,
        followings_count,
        likes_count,
        nickname: profile_username,
        first_name,
        last_name,
        tick,
        videos,
    } = userProfile;
    useEffect(() => {
        const fetchApi = async () => {
            const result = await userProfileService.getUserProfile({
                nickname,
            });
            setUserProfile(result);
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nickname]);

    console.log(userProfile);

    return (
        <div className={cx('wrapper')}>
            <header className={cx('user-container')}>
                <div className={cx('account-info')}>
                    <Image className={cx('avatar')} src={avatar} alt={'oke'} />
                    <div className={cx('info')}>
                        <p className={cx('name')}>
                            <h2>
                                {profile_username}
                                {tick && (
                                    <FontAwesomeIcon
                                        className={cx('account-icon')}
                                        icon={faCheckCircle}
                                    />
                                )}
                            </h2>
                        </p>
                        <span className={cx('username')}>
                            {first_name} {last_name}
                        </span>
                        <div className={cx('edit-container')}>
                            {/* <div className={cx('btn-follow-container')}>
                                <Button primary xlarge ><strong>Follow</strong></Button>
                            </div> */}
                            {isGuest ? (
                                <div className={cx('btn-messages-container')}>
                                    <Button outline xmedium>
                                        Messages
                                    </Button>
                                    <Tippy
                                        delay={[0, 100]}
                                        interactive
                                        content="Unfollow"
                                        placement="bottom"
                                    >
                                        <div>
                                            <Button
                                                upload
                                                small
                                                icon={<UnfollowIcon />}
                                            />
                                        </div>
                                    </Tippy>
                                </div>
                            ) : (
                                <Button
                                    className={cx('btn-edit-container')}
                                    upload
                                    icon={<EditIcon />}
                                >
                                    <strong>Edit profile</strong>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                <div className={cx('count-info')}>
                    <div>
                        <strong>{followings_count}</strong>
                        <span>Following</span>
                    </div>
                    <div>
                        <strong>{followers_count}</strong>
                        <span>Followers</span>
                    </div>
                    <div>
                        <strong>{likes_count}</strong>
                        <span>Likes</span>
                    </div>
                </div>

                <p className={cx('bio-info')}>{bio}</p>

                <Share placement="bottom-start" offset={[-230, 0]} arrowtop>
                    <div className={cx('action-share')}>
                        <ShareIconWhite />
                    </div>
                </Share>
                {isGuest && (
                    <div className={cx('action-more')}>
                        <MoreActionIcon />
                    </div>
                )}
            </header>

            <section className={cx('video-container')}>
                <div className={cx('video-feedtab')}>
                    <p className={cx('video-post')}>
                        <span>Videos</span>
                    </p>
                    <p className={cx('video-like')}>
                        <LockIcon className={cx('transform')} />
                        <span>Liked</span>
                    </p>
                    <div className={cx('bottom-line')}></div>
                </div>
                {videos.length > 0 ? (
                    <div className={cx('video-profile')}>
                        {videos.map((video) => (
                            <VideoItemProfile
                                key={video.id}
                                data={video}
                                profile={true}
                            />
                        ))}
                    </div>
                ) : (
                    <main className={cx('video-main-wrapper')}>
                        <div className={cx('video-err')}>
                            <NoVideoIcon className={cx('opcity')} />
                            <p className={cx('video-title')}>
                                Upload your first video
                            </p>
                            <p className={cx('video-desc')}>
                                Your videos will appear here
                            </p>
                        </div>
                    </main>
                )}
            </section>
        </div>
    );
}

export default Profile;
