import classNames from 'classnames/bind';
import { HomeActiveICon, HomeICon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from '~/components/Icons';
import SidebarDiscovery from '~/components/SidebarDiscovery';
import SidebarFooter from '~/components/SidebarFooter';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';
import Menu, { MenuItem } from '~/layouts/component/Sidebar/Memu';
import styles from './SmallSidebar.module.scss';

const cx = classNames.bind(styles)
function SmallSidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeICon />} activeIcon={<HomeActiveICon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Following accounts" />
            <SidebarDiscovery />
            <SidebarFooter />
        </aside >
    );
}

export default SmallSidebar;