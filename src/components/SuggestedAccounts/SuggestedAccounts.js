import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { useEffect, useState, } from 'react';
import Tippy from '@tippyjs/react/headless';

import AccountItem from "./AccountItem";
import styles from './SuggestedAccounts.module.scss'
import * as searchServices from '~/services/searchService'

const cx = classNames.bind(styles)

function SuggestedAccounts({ label }) {

    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.search("aa")
            setSearchResult(result)
        }
        fetchApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Tippy
            delay={[800, 0]}
            interactive
            placement="bottom-end"
            render={attrs => (
                <div className={cx('')} tabIndex="-1" {...attrs}>
                    <h2>hehee</h2>
                </div>
            )}

        >
            <div className={cx('wrapper')}>
                <p className={cx('label')}>{label}</p>
                {searchResult.map(result => (
                    <AccountItem key={result.id} data={result} />
                ))}
                <button className={cx('more-btn')}>See all</button>
            </div>
        </Tippy>
    );
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired
}
export default SuggestedAccounts;