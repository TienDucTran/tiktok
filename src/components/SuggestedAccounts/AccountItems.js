import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import AccountItemPreview from './AccountItemPreview';

function AccountItems({ data, children, profile = false, offset = [] }) {
    return (
        <div>
            <Tippy
                delay={[800, 0]}
                interactive
                placement="bottom"
                offset={offset}
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
    children: PropTypes.node.isRequired,
    profile: PropTypes.bool,
    offset: PropTypes.array,
}
export default AccountItems;