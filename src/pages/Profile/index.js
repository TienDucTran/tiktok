import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';

import Button from "~/components/Button";
import { EditIcon, LockIcon, MoreActionIcon, NoVideoIcon, ShareIconWhite, UnfollowIcon } from "~/components/Icons";
import Image from "~/components/Image";
import styles from './Profile.module.scss'
import * as userProfileService from '~/services/userProfileService'



const cx = classNames.bind(styles)
function Profile() {
    const isGuest = true
    const [userProfile, setUserProfile] = useState({})
    useEffect(() => {
        const fetchApi = async () => {
            const result = await userProfileService.getUserProfile({ q: `tienduc` })
            setUserProfile(result)
        }
        fetchApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(userProfile);

    return (
        <div className={cx('wrapper')}>
            <header className={cx('user-container')}>
                <div className={cx('account-info')}>
                    <Image className={cx('avatar')} src={"/"} alt={"oke"} />
                    <div className={cx('info')}>
                        <p className={cx('name')}>
                            <h2>tienducnehi
                                {true && <FontAwesomeIcon className={cx('account-icon')} icon={faCheckCircle} />}
                            </h2>
                        </p>
                        <span className={cx('username')}>Trần Tiến Đức</span>
                        <div className={cx('edit-container')}>

                            <div className={cx('btn-follow-container')}>
                                <Button primary xlarge ><strong>Follow</strong></Button>
                            </div>
                            {isGuest
                                ? <div className={cx('btn-messages-container')}>
                                    <Button outline xmedium >Messages</Button>
                                    <Tippy delay={[0, 100]} interactive content='Unfollow' placement='bottom'>
                                        <div>
                                            <Button upload small icon={<UnfollowIcon />} />

                                        </div>
                                    </Tippy>
                                </div>
                                : <Button upload icon={<EditIcon />}><strong>Edit profile</strong></Button>}

                        </div>
                    </div>
                </div>

                <div className={cx('count-info')}>
                    <div>
                        <strong>478</strong>
                        <span>Following</span>
                    </div>
                    <div>
                        <strong>23</strong>
                        <span>Followers</span>
                    </div>
                    <div>
                        <strong>0</strong>
                        <span>Likes</span>
                    </div>
                </div>

                <p className={cx('bio-info')}>No bio yet.</p>
                <div className={cx('action-share')}><ShareIconWhite /></div>
                {isGuest && <div className={cx('action-more')}><MoreActionIcon /></div>}
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
                    <div className={cx('bottom-line')} ></div>
                </div>

                <main className={cx('video-main-wrapper')}>
                    <div className={cx('video-err')}>
                        <NoVideoIcon className={cx('opcity')} />
                        <p className={cx('video-title')}>Upload your first video</p>
                        <p className={cx('video-desc')}>Your videos will appear here</p>
                    </div>
                </main>
            </section>
        </div>

    );
}

export default Profile;