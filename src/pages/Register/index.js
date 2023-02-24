

import classNames from "classnames/bind";

import RegisterPreview from "~/layouts/component/RegisterPreview";
import styles from './Register.module.scss'
const cx = classNames.bind(styles)
function Register() {
    return (
        <div className={cx('wrapper')}>
            <dv className={cx('container')}>
                <RegisterPreview />
            </dv >
        </div>
    );
}

export default Register;