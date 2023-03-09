/* eslint-disable react/style-prop-object */
import classNames from "classnames/bind";
import Header from "~/layouts/component/Header";
import PropTypes from 'prop-types';
import { useContext } from "react";


import styles from './DefaultLayout.module.scss'
import Sidebar from "~/layouts/component/Sidebar";
import { ThemeContext } from "~/context";
import DownloadApp from "~/layouts/component/DownloadApp";
// import { MediaQueryContext } from "~/context/MediaQueryContext";


const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
    // const breakpoint = useContext(MediaQueryContext)
    const value = useContext(ThemeContext)
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                {/* <div className={cx('mask')}></div> */}
                <div className={cx('nav-container')}>
                    <div className={cx('scroll-container', value.theme)}>
                        <Sidebar />
                    </div>
                </div>

                <div className={cx('content')} >
                    {children}
                </div>
            </div>
            <DownloadApp />
        </div>)
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default DefaultLayout;