import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss'
import Image from '~/components/Image';
import { TickIcon } from '~/components/Icons';
import AccountItemPreview from './AccountItemPreview';

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <div>
            <Tippy
                delay={[800, 0]}
                interactive
                placement="bottom"
                offset={[-22, 2]}
                render={attrs =>
                    <div tabIndex="-1" {...attrs}>
                        <AccountItemPreview data={data} />
                    </div>
                }
            >
                <Link to={`/@/${data.nickname}`} className={cx('account-item')} >
                    <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
                    <div className={cx('info')}>
                        <p className={cx('name')}>
                            <span>{data.nickname}</span>
                            {data.tick && <TickIcon className={cx('tick-blue')} />}
                        </p>
                        <span className={cx('username')}>{data.full_name}</span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}
export default (AccountItem);