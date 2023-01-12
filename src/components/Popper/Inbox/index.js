
import Tippy from '@tippyjs/react';
// import classNames from 'classnames/bind';

// import styles from './Inbox.module.scss'
// import { Wrapper as PopperWrapper } from '~/components/Popper';
// const cx = classNames.bind(styles)

function Inbox({ children }) {
    // const renderItem = () => {
    //     <h2>hihi</h2>
    // }
    return (
        <Tippy
            interactive
            trigger='click'
            content='Inbox'
            placement='bottom'
        // render={attrs => (
        //     <div className={cx('inbox-list')} tabIndex="-1" {...attrs}>
        //         <PopperWrapper className={cx('inbox-popper')} >
        //             {renderItem()}
        //         </PopperWrapper>
        //     </div>
        // )}
        >
            {children}
        </Tippy>
    )
}
export default Inbox

