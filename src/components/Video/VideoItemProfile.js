import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Video.module.scss';
import {
    PauseIcon,
    ReportIcon,
    SoundIcon,
    UseIcon,
    ShareIcon,
    CommentIcon,
    LikeIcon,
    MuteSoundIcon,
} from '~/components/Icons';
import EditVideo from './EditVideo';
import { useEffect, useRef, useState } from 'react';
import ActionItem from './ActionItem';
import Share from '../Popper/Share/Share';
const cx = classNames.bind(styles);

function VideoItemProfile({ data, profile }) {
    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(0.5);
    const [isFirstClick, setIsFirstClick] = useState(true);

    const handleClick = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
        if (isFirstClick) {
            // ✅ Run only on first click
            handleClickSound();
            setIsFirstClick(false); // ✅ Ensure it runs only once
        }
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
        <div className={cx('wrapper-profile')}>
            <div className={cx('footer')}>
                <div className={cx('video')}>
                    <EditVideo data={data} ref={videoRef} profile={profile} />
                    <p className={cx('icon-flag')}>
                        <ReportIcon className={cx('mr4')} />
                        Report
                    </p>
                    <button onClick={handleClick} className={cx('icon-handle')}>
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
                    <Share placement="top-start" offset={[-15, 305]} arrowdow>
                        <div>
                            <ActionItem data={data.hares_count}>
                                <ShareIcon />
                            </ActionItem>
                        </div>
                    </Share>
                </div>
            </div>
        </div>
    );
}
PropTypes.propTypes = {
    data: PropTypes.object.isRequired,
};

export default VideoItemProfile;
