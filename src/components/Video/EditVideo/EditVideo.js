/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames/bind';
import { useRef, useImperativeHandle, forwardRef, useEffect } from 'react';

import styles from './EditVideo.module.scss';
const cx = classNames.bind(styles);
function EditVideo({ data, profile, isMuted }, ref) {
    const videoRef = useRef();
    const observer = useRef();
    useEffect(() => {
        if (!profile) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 1,
            };
            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            }, options);
            if (videoRef.current) {
                observer.current.observe(videoRef.current);
            }
            return () => {
                if (observer.current && videoRef.current) {
                    // ✅ Prevent error
                    observer.current.unobserve(videoRef.current);
                }
            };
        }
    }, [profile]);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = isMuted;
        }
    }, [isMuted]);

    useImperativeHandle(ref, () => ({
        play: () => videoRef.current?.play(),
        pause: () => videoRef.current?.pause(),
        setVolume: (volume) => (videoRef.current.volume = volume),
    }));

    return (
        <video
            ref={videoRef}
            className={cx('wrapper')}
            src={data.file_url}
            loop
        />
    );
}

export default forwardRef(EditVideo);
