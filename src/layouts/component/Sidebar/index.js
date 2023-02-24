import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import config from '~/config';
import { HomeICon, HomeActiveICon, LiveIcon, LiveActiveIcon, UserGroupIcon, UserGroupActiveIcon } from '~/components/Icons';
import Menu, { MenuItem } from './Memu';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles)
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeICon />} activeIcon={<HomeActiveICon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" />
        </aside>
    );
}

export default Sidebar;