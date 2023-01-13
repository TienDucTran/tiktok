import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';

import AccountItem from '~/components/AccountItem';
import { CloseIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';


const cx = classNames.bind(styles)
function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1])
        }, 0)
    }, [])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }
    const handleHideResult = () => {
        setShowResult(false)

    }
    return (
        <HeadlessTippy
            interactive
            visible={searchResult.length && showResult}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('search-popper')}>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Search accounts and videos'
                    spellCheck={false}
                    onChange={e => {
                        setSearchValue(e.target.value)
                        setSearchResult([1])
                    }}
                    onFocus={() => setShowResult(true)}
                />
                {!!setSearchValue && (
                    <button
                        className={cx('close')}
                        onClick={handleClear}>
                        <CloseIcon />
                    </button>
                )}

                {/* <LoadingIcon className={cx('loading')} /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;