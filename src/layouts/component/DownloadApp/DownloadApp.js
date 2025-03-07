import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { BigCloseIcon, DestopIcon, SmartPhoneIcon } from '~/components/Icons';
import Button from '~/components/Button';

import { ScrollToTopIcon } from '~/components/Icons';
import styles from './DownloadApp.module.scss';

const cx = classNames.bind(styles);
function DownloadApp() {
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 120) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // for smoothly scrolling
        });
    };
    const handleClick = () => {
        setActive(!active);
    };

    return (
        <div className={cx('wrapper', { show: visible })}>
            <Button
                className={cx({ active: active })}
                rounded
                onClick={handleClick}
            >
                Get app
            </Button>
            <div className={cx('download-container')}>
                <div
                    className={cx('download-close-icon')}
                    onClick={handleClick}
                >
                    <BigCloseIcon />
                </div>
                <div className={cx('download-wrapper-icon')}>
                    <Button
                        className={cx('download-item-icon')}
                        icon={<DestopIcon />}
                    >
                        Get TikTok for desktop
                    </Button>
                    <div className={cx('download-split-center')}></div>
                    <Button
                        className={cx('download-item-icon')}
                        icon={<SmartPhoneIcon />}
                    >
                        Get TikTok App
                    </Button>
                </div>
            </div>

            <div onClick={scrollToTop} className={cx('scroll-top')}>
                <i className={cx('icon-scroll')}>
                    <ScrollToTopIcon />
                </i>
            </div>
        </div>
    );
}

export default DownloadApp;
