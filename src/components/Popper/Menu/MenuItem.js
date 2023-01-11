import Button from "~/components/Button";
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
function MenuItem({ key, data, onClick }) {
    const className = cx('menu-item', {
        separate: data.separate
    })

    return (
        <Button className={className} key={key} to={data.to} href={data.href} icon={data.icon} onClick={onClick} >
            {data.title}
        </Button>
    );
}

export default MenuItem;