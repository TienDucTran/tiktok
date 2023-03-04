import classNames from "classnames/bind";
import config from "~/config";
import Button from "../Button";
import { HashtagIcon, MusicIcon } from "../Icons";
import styles from './SidebarDiscovery.module.scss'

const cx = classNames.bind(styles)

function SidebarDiscovery() {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('discovery-title')}>Discovery</p>
            <div className={cx('discovery-list-container')}>
                <Button to={config.routes.tag} className={cx('discovery-item-container')} icon={<HashtagIcon />} >suthatla</Button>
                <Button to={config.routes.tag} className={cx('discovery-item-container')} icon={<HashtagIcon />} >mackedoi</Button>
                <Button to={config.routes.tag} className={cx('discovery-item-container')} icon={<HashtagIcon />} >sansangthaydoi</Button>
                <Button to={config.routes.music} className={cx('discovery-item-container', 'music')} icon={<MusicIcon />} >Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia</Button>
                <Button to={config.routes.music} className={cx('discovery-item-container', 'music')} icon={<MusicIcon />} >Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng</Button>
                <Button to={config.routes.music} className={cx('discovery-item-container', 'music')} icon={<MusicIcon />} >Thiên Thần Tình Yêu - RICKY STAR</Button>
                <Button to={config.routes.tag} className={cx('discovery-item-container')} icon={<HashtagIcon />} >7749hieuung</Button>
                <Button to={config.routes.tag} className={cx('discovery-item-container')} icon={<HashtagIcon />} >genzlife</Button>
                <Button to={config.routes.music} className={cx('discovery-item-container', 'music')} icon={<MusicIcon />} >Tình Đã Đầy Một Tim - Huyền Tâm Môn</Button>
                <Button to={config.routes.music} className={cx('discovery-item-container', 'music')} icon={<MusicIcon />} >Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham</Button>

            </div>
        </div>
    );
}

export default SidebarDiscovery;