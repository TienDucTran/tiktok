import classNames from "classnames/bind";
import Button from "../Button";
import { EffectsIcon } from "../Icons";
import styles from './SidebarFooter.module.scss'

const cx = classNames.bind(styles)

function SidebarFooter() {
    return (
        <div className={cx('wrapper')}>

            <div className={cx('effect-container')}>
                <Button className={cx('effect-link')} href='https://effecthouse.tiktok.com/?utm_content=left_sidebar&utm_source=tiktok_webapp_main'>
                    <img className={cx('effect-img')} src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/045b2fc7c278b9a30dd0.png" alt="background" />
                    <Button icon={<EffectsIcon />} className={cx('button-effct')}>
                        <h4 className={cx('text-effect')}> Create effects</h4>
                    </Button>
                </Button >
            </div >

            <div className={cx('link-container')}>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>About</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>Newsroom</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>Contact</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>Careers</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>ByteDance</a>
            </div>
            <div className={cx('link-container')}>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>TikTok for Good</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>Advertise</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>Devolopers</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>Transparency</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>TikTok Rewards</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>TikTok Browse</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>TikTok Embeds</a>

            </div>
            <div className={cx('link-container')}>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>Help</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>Safety</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>Terms</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>Privacy</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>Creator Portal</a>
                <a href="https://www.tiktok.com/about?lang=en" className={cx('style-link')}>Community Guidelines</a>

            </div>
            <span className={cx('span-copyright')}> © 2023 TikTok</span>
        </div>
    );
}

export default SidebarFooter;