import Button from "~/components/Button";
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
function MenuItem({ key, data, onClick }) {
    const className = cx('menu-item', {
        separate: data.separate
    })

    return (
        <Button className={className} key={key} to={data.to} href={data.href} icon={data.icon} theme={data.theme} onClick={onClick} >
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    key: PropTypes.number,
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}
export default MenuItem;