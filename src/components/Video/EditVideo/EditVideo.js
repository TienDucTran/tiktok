import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { useRef, useImperativeHandle, forwardRef } from "react";

import styles from './EditVideo.module.scss'
const cx = classNames.bind(styles)
function EditVideo({ data, props, ref }) {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        },
    }))
    return (
        <video
            ref={videoRef}
            className={cx('wrapper')}
            src={data.file_url}
        />
    );
}

EditVideo.propTypes = {
    data: PropTypes.object.isRequired,
    ref: PropTypes.object.isRequired
}
export default forwardRef(EditVideo);