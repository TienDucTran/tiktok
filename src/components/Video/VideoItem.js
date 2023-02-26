import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import styles from './Video.module.scss'
import Button from "~/components/Button";
import Image from "~/components/Image";
import { PauseIcon, ReportIcon, SoundIcon, TickIcon, UseIcon, ShareIcon, CommentIcon, LikeIcon } from "~/components/Icons";
import EditVideo from "./EditVideo";
import { useEffect, useRef, useState } from "react";
import ActionItem from "./ActionItem";
const cx = classNames.bind(styles)

function VideoItem({ data }) {
    const place = true
    const videoRef = useRef()

    const [use, setUse] = useState(false)

    useEffect(() => {
        console.log(videoRef);

    })

    const handlePlay = () => {
        videoRef.current.play()
    }
    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <div className={cx('wrapper')}>
            <Link to={`/@/${data.user.nickname}`} >
                <Image className={cx('avatar')} src={data.user.avatar} alt={data.user.full_name} />
            </Link>
            <div className={cx('content')} >
                <div className={cx('header')}>
                    <div className={cx('info')}>
                        <Link to={`/@/${data.user.nickname}`}>
                            <h3 className={cx('nick-name')}>{data.user.nickname}</h3>
                            {data.user.tick && <TickIcon className={cx('tick-blue')} />}
                            <h4>{data.user.first_name} {data.user.last_name}</h4>
                        </Link>
                    </div>

                    <Button outline className={cx('btn')}>Follow</Button>

                    <div className={cx('description')}>
                        <span>{data.description}</span>
                        <Link className={cx('description-link')}>#Tag conbo#xuhuong</Link>
                    </div>

                    {place ? <div className={cx('place')}>Place</div> : <></>}

                    <Link className={cx('music')}>Music</Link>
                </div>

                <div className={cx('footer')}>

                    <div className={cx('video')}>
                        <EditVideo data={data} ref={videoRef} />
                        <p className={cx('icon-flag')}><ReportIcon className={cx('mr4')} />Report</p>
                        {use ? <div onClick={handlePlay} className={cx('icon-use')}><UseIcon /></div> :
                            <div onClick={handlePause} className={cx('icon-pause')}><PauseIcon /></div>
                        }

                        <div className={cx('icon-sound')}><SoundIcon /></div>
                    </div>

                    <div className={cx('action-item')}>
                        <ActionItem data={data.likes_count} >
                            <LikeIcon />
                        </ActionItem>
                        <ActionItem data={data.comments_count} >
                            <CommentIcon />
                        </ActionItem>
                        <ActionItem data={data.hares_count} >
                            <ShareIcon />
                        </ActionItem>

                    </div>
                </div>
            </div>
        </div>

    );
}
PropTypes.propTypes = {
    data: PropTypes.object.isRequired
}
export default VideoItem;