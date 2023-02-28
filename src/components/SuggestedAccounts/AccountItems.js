import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import AccountItemPreview from './AccountItemPreview';

function AccountItems({ data, children, profile }) {
    return (
        <div>
            <Tippy
                delay={[800, 0]}
                interactive
                placement="bottom"
                offset={[-22, 2]}
                render={attrs =>
                    <div tabIndex="-1" {...attrs}>
                        <AccountItemPreview data={data} profile={profile} />
                    </div>
                }
            >
                {children}
            </Tippy>
        </div>
    );
}
AccountItems.propTypes = {
    data: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
}
export default AccountItems;