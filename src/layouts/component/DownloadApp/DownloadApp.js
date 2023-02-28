import classNames from "classnames/bind";
import { useEffect, useState } from "react";


import Button from "~/components/Button";
import { ScrollToTopIcon } from "~/components/Icons";
import GetApp from "~/components/Popper/GetApp";
import styles from "./DownloadApp.module.scss";


const cx = classNames.bind(styles)
function DownloadApp() {
    const [visible, setVisible] = useState('false')
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 120) {
                setVisible(true)
            } else {
                setVisible(false)

            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // for smoothly scrolling
        })
    }

    return (
        <div className={cx('wrapper', { 'show': visible })}>
            <GetApp>
                <Button rounded>
                    Get app
                </Button>
            </GetApp>

            <div onClick={scrollToTop} className={cx('scroll-top')}>
                <i className={cx('icon-scroll')}>
                    <ScrollToTopIcon />
                </i>
            </div>
        </div>
    )
}

export default DownloadApp;