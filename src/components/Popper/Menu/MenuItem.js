import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
function MenuItem({ key, data, onClick }) {
    return (
        <Button className={cx('menu-item')} key={key} to={data.to} icon={data.icon} onClick={onClick} >
            {data.title}
        </Button>
    );
}

export default MenuItem;