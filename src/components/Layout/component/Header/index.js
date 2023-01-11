import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faEllipsisVertical, faCircleQuestion, faKeyboard, faMoon, faEarthAsia, faCommentDots, faPaperPlane, faVideoCamera, faGear, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Menu } from '~/components/Popper';

const cx = classNames.bind(styles)
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
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
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'

    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode ',

    },
]
function Header() {
    const [searchResult, setSearchResult] = useState([])
    const currentUser = true

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])
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
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@tienducne'
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Get Coins',
        },
        {
            icon: <FontAwesomeIcon icon={faVideoCamera} />,
            title: 'LIVE Studio',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
            title: 'Log out',
            href: 'https://www.youtube.com/watch?v=iOoSBvWBeP8&list=RD6tmhg_QFPcg&index=21',
            separate: true
        },
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Tiktok" />
            </div>
            <HeadlessTippy
                interactive
                visible={searchResult.length}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('search-popper')}>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>

            <div className={cx('actions')}>
                <Button upload>
                    <FontAwesomeIcon className={cx('icon-plus')} icon={faPlus} />
                    <span>Upload</span>
                </Button>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 100]} content='Messages' placement='bottom'>
                            <button className={cx('user-btn')}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </Tippy>

                        <Tippy delay={[0, 100]} content='Inbox' placement='bottom'>
                            <button className={cx('user-btn')}>
                                <FontAwesomeIcon icon={faCommentDots} />
                            </button>
                        </Tippy>

                    </>
                ) : (
                    <>
                        <Button primary>Log in</Button>
                    </>
                )}
                <Menu Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <img
                            className={cx('user-avatar')}
                            src='https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/313418667_3398784547021624_2339568373130949220_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Q271wuMERd4AX9nEQxn&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA7Zeax-RMzt2wm3rMI4acfVmKbcobVtIAksnz-dh-Jog&oe=63B95296'
                            alt='Trantienduc'>

                        </img>
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    )}
                </Menu>

            </div>


        </div >
    </header >
}

export default Header;