import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Video.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';
import {
    PauseIcon,
    ReportIcon,
    SoundIcon,
    TickIcon,
    UseIcon,
    ShareIcon,
    CommentIcon,
    LikeIcon,
    MuteSoundIcon,
    MusicIcon,
} from '~/components/Icons';
import EditVideo from './EditVideo';
import { useEffect, useRef, useState } from 'react';
import ActionItem from './ActionItem';
import AccountItems from '../SuggestedAccounts/AccountItems';
import Share from '../Popper/Share/Share';
const cx = classNames.bind(styles);

function VideoItem({ data, isMuted, setIsMuted }) {
    const place = false;
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(true);

    const [volume, setVolume] = useState(0.5);

    const handleClick = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value / 100;
        setVolume(newVolume);
        videoRef.current?.setVolume(newVolume);
    };

    const handleClickSound = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div className={cx('wrapper')}>
            <AccountItems data={data} profile offset={[120, 4]}>
                <Link to={`/@/${data.user.nickname}`} className={cx('avatar')}>
                    <Image
                        className={cx('avatar-img')}
                        src={data.user.avatar}
                        alt={data.user.full_name}
                    />
                </Link>
            </AccountItems>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <div className={cx('info')}>
                        <AccountItems data={data} profile offset={[-41, 31]}>
                            <Link
                                to={`/@/${data.user.nickname}`}
                                className={cx('info-link')}
                            >
                                <h3 className={cx('nick-name')}>
                                    {data.user.nickname}
                                </h3>
                                {data.user.tick && (
                                    <TickIcon className={cx('tick-blue')} />
                                )}
                                <h4>
                                    {data.user.first_name} {data.user.last_name}
                                </h4>
                            </Link>
                        </AccountItems>
                    </div>

                    <Button outline className={cx('header-btn-following')}>
                        Follow
                    </Button>

                    <div className={cx('header-description')}>
                        <span>{data.description}</span>
                        <Link className={cx('description-link')}>
                            #Tag conbo#xuhuong
                        </Link>
                    </div>

                    {place && <div className={cx('header-place')}>Place</div>}

                    <Link className={cx('header-music')}>
                        <MusicIcon className={cx('mr4')} />{' '}
                        {data.music ||
                            `nhạc nền - ${data.user.first_name} ${data.user.last_name}`}
                    </Link>
                </div>

                <div className={cx('footer')}>
                    <div className={cx('video')}>
                        <EditVideo
                            data={data}
                            ref={videoRef}
                            profile={false}
                            isMuted={isMuted}
                        />
                        <p className={cx('icon-flag')}>
                            <ReportIcon className={cx('mr4')} />
                            Report
                        </p>
                        <button
                            onClick={handleClick}
                            className={cx('icon-handle')}
                        >
                            {isPlaying ? <PauseIcon /> : <UseIcon />}
                        </button>

                        <div className={cx('volume-container')}>
                            <div className={cx('volume-control')}>
                                <div className={cx('volume-background')}>
                                    <div
                                        className={cx('volume-bar')}
                                        style={{ width: `${volume * 100}%` }} // Dynamic width
                                    >
                                        <div
                                            className={cx('volume-dot')}
                                            style={{ left: `${volume * 100}%` }} // Move the dot
                                        ></div>
                                    </div>
                                </div>
                                <input
                                    className={cx('volume-range')}
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={volume * 100} // Convert 0-1 to 0-100
                                    onChange={handleVolumeChange}
                                />
                            </div>

                            <button
                                className={cx('icon-sound')}
                                onClick={handleClickSound}
                            >
                                {isMuted ? <MuteSoundIcon /> : <SoundIcon />}
                            </button>
                        </div>
                    </div>

                    <div className={cx('action-item')}>
                        <ActionItem data={data.likes_count}>
                            <LikeIcon />
                        </ActionItem>
                        <ActionItem data={data.comments_count}>
                            <CommentIcon />
                        </ActionItem>
                        <Share
                            placement="top-start"
                            offset={[-15, 305]}
                            arrowdow
                        >
                            <div>
                                <ActionItem data={data.hares_count}>
                                    <ShareIcon />
                                </ActionItem>
                            </div>
                        </Share>
                    </div>
                </div>
            </div>
        </div>
    );
}
PropTypes.propTypes = {
    data: PropTypes.object.isRequired,
};

export default VideoItem;
