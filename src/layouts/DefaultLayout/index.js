/* eslint-disable react/style-prop-object */
import classNames from "classnames/bind";
import Header from "~/layouts/component/Header";
import PropTypes from 'prop-types';
import { useContext } from "react";


import styles from './DefaultLayout.module.scss'
import Sidebar from "~/layouts/component/Sidebar";
import { ThemeContext } from "~/context";

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {

    const value = useContext(ThemeContext)
    return (
        <div className={cx('wrapper', value.theme)}>
            <Header />
            <div className={cx('container')}>
                {/* <div className={cx('mask')}></div> */}
                <div className={cx('nav-container')}>
                    <div className={cx('scroll-container')}>
                        <Sidebar />
                    </div>
                </div>

                <div className={cx('content')} >
                    {children}
                </div>
            </div>
        </div>)
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default DefaultLayout;