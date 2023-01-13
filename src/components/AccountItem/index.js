import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "~/components/Image";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src='https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/313418667_3398784547021624_2339568373130949220_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Q271wuMERd4AX9nEQxn&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA7Zeax-RMzt2wm3rMI4acfVmKbcobVtIAksnz-dh-Jog&oe=63B95296' alt="anh" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>trantienduc</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Tran Tien Duc</span>
            </div>
        </div>
    );
}

export default AccountItem;