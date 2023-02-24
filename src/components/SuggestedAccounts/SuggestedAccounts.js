import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { useEffect, useState, useCallback } from 'react';
import AccountItem from "./AccountItem";
import styles from './SuggestedAccounts.module.scss'
import * as userService from '~/services/userService'
// import * as followingService from '~/services/followingService'

const cx = classNames.bind(styles)
const INIT_PAGE = 1
const PER_PAGE = 5
function SuggestedAccounts({ label }) {

    const [suggested, setSuggested] = useState([])
    const [perPage, setPerPage] = useState(PER_PAGE);
    const [showExtraItems, setShowExtraItems] = useState(false);
    useEffect(() => {
        const fetchApi = async () => {
            if (label === "Suggested accounts") {
                if (perPage === 5) {
                    const result = await userService.getSuggested({ page: INIT_PAGE, perPage: perPage })
                    setSuggested(result)
                } else {
                    const result = await userService.getSuggested({ page: INIT_PAGE, perPage: perPage })
                    setSuggested(result)
                }
                //! ADD API following 
            } else {
                if (perPage === 5) {
                    const result = await userService.getSuggested({ page: 4, perPage: perPage })
                    setSuggested(result)
                } else {
                    const result = await userService.getSuggested({ page: 4, perPage: perPage })
                    setSuggested(prevUsers => [...prevUsers, ...result])
                }
            }
        }
        fetchApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [perPage])
    const handleClickAll = useCallback(() => {
        setShowExtraItems(true);
        setPerPage(PER_PAGE + 10);
    }, []);

    const handleClickLess = useCallback(() => {
        setShowExtraItems(false);
        setPerPage(PER_PAGE);
    }, []);
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {suggested.map(result => (
                <AccountItem key={result.id} data={result} />
            ))}
            {showExtraItems ? (
                <button className={cx('more-btn')} onClick={handleClickLess}>See less</button>
            ) : (
                <button className={cx('more-btn')} onClick={handleClickAll}>See all</button>
            )}
        </div>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired
}
export default SuggestedAccounts;