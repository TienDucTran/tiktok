import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
function MenuItem({ key, data }) {
    return (
        <Button className={cx('menu-item')} key={key} icon={data.icon} >
            {data.title}
        </Button>
    );
}

export default MenuItem;