import classNames from "classnames/bind";
import Header from "~/layouts/component/Header";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { ThemeContext } from "~/context";


import styles from './BigLayout.module.scss'
import DownloadApp from "~/layouts/component/DownloadApp";
import SmallSidebar from "~/layouts/component/SmallSidebar";


const cx = classNames.bind(styles)

function BigLayout({ children }) {
    const value = useContext(ThemeContext)

    return (
        <div className={cx('wrapper')}>
            <Header biginner />
            <div className={cx('container')}>
                <div className={cx('nav-container')}>
                    <div className={cx('scroll-container', value.theme)}>
                        <SmallSidebar />
                    </div>
                </div>

                <div className={cx('content')} >
                    {children}
                </div>
            </div>
            <DownloadApp />
        </div>)
}
BigLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default BigLayout;