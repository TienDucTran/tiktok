import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Share.module.scss';
import Button from '~/components/Button';
import {
    ArrowDownIcon,
    ArrowIcon,
    CopyLinkIcon,
    EmailIcon,
    EmbedIcon,
    FaceBookIcon,
    LineIcon,
    LinkedlnIcon,
    PinterestIcon,
    RedditIcon,
    SendIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsAppicon,
} from '~/components/Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
const SHARE_ITEMS = [
    {
        icon: <EmbedIcon />,
        title: 'Embed',
        to: '/@/tienduc',
    },
    {
        icon: <SendIcon />,
        title: 'Send to friends',
    },
    {
        icon: <FaceBookIcon />,
        title: 'Share to Facebook',
    },
    {
        icon: <WhatsAppicon />,
        title: 'Share to WhatsApp',
    },
    {
        icon: <CopyLinkIcon />,
        title: 'Copy link',
    },
];

function Share({
    children,
    placement = '',
    offset = [],
    arrowdow = false,
    arrowtop = false,
}) {
    const [active, setActive] = useState(true);
    const handleClick = () => {
        setActive(!active);
    };
    const handleHide = () => {
        setActive(true);
    };
    const shareMenu = [
        ...SHARE_ITEMS,
        {
            icon: <TwitterIcon />,
            title: 'Share to Twitter',
        },
        {
            icon: <LinkedlnIcon />,
            title: 'Share to Linkedln',
        },
        {
            icon: <RedditIcon />,
            title: 'Share to Reddit',
        },
        {
            icon: <TelegramIcon />,
            title: 'Share to Telegram',
        },
        {
            icon: <EmailIcon />,
            title: 'Share to Email',
        },
        {
            icon: <LineIcon />,
            title: 'Share to Line',
        },
        {
            icon: <PinterestIcon />,
            title: 'Share to Pinterest',
        },
    ];
    return (
        <div>
            <Tippy
                arrow
                interactive
                placement={placement}
                delay={[0, 250]}
                offset={offset}
                render={(attrs) => (
                    <div
                        className={cx('share-wrapper')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper className={cx('share-poper')}>
                            {arrowdow && (
                                <ArrowIcon
                                    className={cx('arrow-bottom-poper')}
                                />
                            )}
                            {arrowtop && (
                                <ArrowIcon
                                    className={cx('arrow-top-poper-1')}
                                />
                            )}

                            <div
                                className={cx('share-list', {
                                    active: !active,
                                })}
                            >
                                {active ? (
                                    <>
                                        {SHARE_ITEMS.map((items, index) => (
                                            <Button
                                                to={items.to}
                                                key={index}
                                                itemkey={index}
                                                className={cx('share-item')}
                                                icon={items.icon}
                                            >
                                                {items.title}
                                            </Button>
                                        ))}
                                        <Button
                                            className={cx('share-more-item')}
                                            icon={<ArrowDownIcon />}
                                            onClick={handleClick}
                                        />
                                    </>
                                ) : (
                                    shareMenu.map((items, index) => (
                                        <Button
                                            to={items.to}
                                            key={index}
                                            itemkey={index}
                                            className={cx('share-item')}
                                            icon={items.icon}
                                        >
                                            {items.title}
                                        </Button>
                                    ))
                                )}
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                onHidden={handleHide}
            >
                {children}
            </Tippy>
        </div>
    );
}
Share.propTypes = {
    children: PropTypes.node.isRequired,
    placement: PropTypes.string.isRequired,
    offset: PropTypes.array.isRequired,
    arrowdow: PropTypes.bool,
    arrowtop: PropTypes.bool,
};
export default Share;
