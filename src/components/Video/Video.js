import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Video.module.scss';
import VideoItem from './VideoItem';
import * as videoService from '~/services/videoService';

const cx = classNames.bind(styles);
function Video() {
    const [video, setVideo] = useState([]);
    const [isMuted, setIsMuted] = useState(() => {
        return localStorage.getItem('videoMuted') === 'true' || true;
    });

    useEffect(() => {
        localStorage.setItem('videoMuted', isMuted); // ✅ Save to localStorage
    }, [isMuted]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await videoService.getVideo({ page: 1 });
            setVideo(result);
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('')}>
            {video.map((result) => (
                <VideoItem
                    key={result.id}
                    data={result}
                    isMuted={isMuted}
                    setIsMuted={setIsMuted}
                />
            ))}
        </div>
    );
}

export default Video;
