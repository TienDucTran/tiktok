import { useState, forwardRef } from 'react'
import classNames from 'classnames';
import styles from './Image.module.scss'
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, fallback: customFallback = images.noImage, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('')
    const handleError = () => {
        setFallback(customFallback)
    }
    return <img className={classNames(styles.wrapper, className)} ref={ref} src={fallback || src} alt={alt} onError={handleError} {...props} />
})
export default Image;