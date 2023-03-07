/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames/bind";
import { useRef, useImperativeHandle, forwardRef, useEffect } from "react";

import styles from './EditVideo.module.scss'
const cx = classNames.bind(styles)
function EditVideo(props, ref) {

    const videoRef = useRef()
    const observer = useRef()
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };
        observer.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                videoRef.current.play();


            } else {
                videoRef.current.pause();
            }
        }, options)
        if (videoRef.current) {
            observer.current.observe(videoRef.current)
        }
        return () => {
            observer.current.unobserve(videoRef.current)
        }
    }, [])

    // useEffect(() => {

    //     console.log(videoRef);
    // })


    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        },
        volume: videoRef.current.volume,
        muted: videoRef.current.muted,
    }))

    return (
        <video
            ref={videoRef}
            className={cx('wrapper')}
            src={props.data.file_url}
            loop
            muted
        />
    );
}


export default forwardRef(EditVideo);