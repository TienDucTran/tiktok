import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import config from '~/config';
import { HomeICon, HomeActiveICon, LiveIcon, LiveActiveIcon, UserGroupIcon, UserGroupActiveIcon } from '~/components/Icons';
import Menu, { MenuItem } from './Memu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import LoginNotify from '~/components/LoginNotify';
import SidebarDiscovery from '~/components/SidebarDiscovery';
import SidebarFooter from '~/components/SidebarFooter';

const cx = classNames.bind(styles)
function Sidebar() {
    const currentUser = true
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeICon />} activeIcon={<HomeActiveICon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            {currentUser
                ? <></>
                : <LoginNotify />}
            <SuggestedAccounts label="Suggested accounts" />

            {currentUser
                ? <SuggestedAccounts label="Following accounts" />
                : <></>}
            <SidebarDiscovery />
            <SidebarFooter />
        </aside >
    );
}

export default Sidebar;