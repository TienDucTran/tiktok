/* eslint-disable react/jsx-no-comment-textnodes */
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss'
import images from '~/assets/images';
import Button from '~/components/Button';
import { Menu } from '~/components/Popper';
import { CameraIcon, FeedbackIcon, InboxIcon, KeyboadIcon, LanguageIcon, LogoutIcon, MenuIcon, MessageIcon, PersonIcon, PlusIcon, SettingIcon, ThemeIcon, TiktokIcon } from '~/components/Icons';
import Inbox from '~/components/Popper/Inbox';
import Image from '~/components/Image';
import Search from '~/layouts/component/Search';
import config from '~/config'


const cx = classNames.bind(styles)
const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ]
        }
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback'

    },
    {
        icon: <KeyboadIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <ThemeIcon />,
        title: 'Dark mode ',

    },
]
function Header() {
    const currentUser = false

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log(menuItem.code);
                break;

            default:
                break;
        }
    }
    const userMenu = [

        {
            icon: <PersonIcon />,
            title: 'View profile',
            to: '/@/tienducne'
        },
        {
            icon: <TiktokIcon />,
            title: 'Get Coins',
        },
        {
            icon: <CameraIcon />,
            title: 'LIVE Studio',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            href: 'https://www.youtube.com/watch?v=iOoSBvWBeP8&list=RD6tmhg_QFPcg&index=21',
            separate: true
        },
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to={config.routes.home} className={cx('logo')}>
                <img src={images.logo} alt="Tiktok" />
            </Link>

            <Search />

            <div className={cx('actions')}>
                <Button upload icon={<PlusIcon />}> Upload</Button>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 100]} content='Messages' placement='bottom'>
                            <button className={cx('action-btn')}>
                                <MessageIcon className={cx('message-icon')} />
                            </button>
                        </Tippy>

                        <Inbox>
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>12</span>
                            </button>
                        </Inbox>

                    </>
                ) : (
                    <>
                        <Button primary to={config.routes.register} >Log in</Button>
                    </>
                )}
                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <Image
                            className={cx('user-avatar')}
                            src='https://scontenta.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/313418667_3398784547021624_2339568373130949220_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Q271wuMERd4AX9nEQxn&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA7Zeax-RMzt2wm3rMI4acfVmKbcobVtIAksnz-dh-Jog&oe=63B95296'
                            alt='Trantienduc'
                            fallback='https://yt3.ggpht.com/yti/AJo0G0nLQm5IV1Bri37tiX5bz3sx5s9xgpaenqaPsA4mlg=s88-c-k-c0x00ffffff-no-rj-mo'
                        />
                    ) : (
                        <button className={cx('menu-btn')}>
                            <MenuIcon />
                        </button>
                    )}
                </Menu>
            </div>
        </div >
    </header >
}

export default Header;