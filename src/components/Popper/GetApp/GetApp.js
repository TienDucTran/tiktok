import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";

import { BigCloseIcon, DestopIcon, SmartPhoneIcon } from "~/components/Icons";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from "~/components/Button";
import styles from "./GetApp.module.scss"

const cx = classNames.bind(styles)

function GetApp({ children }) {
    return (
        <Tippy
            interactive
            placement='bottom'
            render={attrs =>
            (<div className={cx('app-popper')} tabIndex="-1" {...attrs} >
                <PopperWrapper className={cx('')}>
                    <BigCloseIcon />
                    <div>
                        <Button icon={< DestopIcon />}>Get TikTok for desktop</Button>
                        <Button icon={<SmartPhoneIcon />}>Get TikTik for App</Button>

                    </div>
                </PopperWrapper>
            </div>)}
        >
            {children}
        </Tippy>
    );
}
GetApp.propTypes = {
    children: PropTypes.node.isRequired
}
export default GetApp;