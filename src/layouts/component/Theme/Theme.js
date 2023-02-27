import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Theme.module.scss"

const cx = classNames.bind(styles)
function Theme() {
    const [theme, setTheme] = useState('')
    const handleClick = () => {
        if (theme === "dark") {
            // i18n.changeLanguage('en')
            setTheme("light")
        } else {
            // i18n.changeLanguage('vn')
            setTheme("dark")
        }
    }
    return (
        <label className={cx('wrapper', theme)}>
            <button onClick={handleClick} className={cx('btn-change')}>

            </button>
        </label>
    );
}

export default Theme;