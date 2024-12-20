import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';

import AccountItem from '~/components/AccountItem';
import { CloseIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks'
import * as searchServices from '~/services/searchService'


const cx = classNames.bind(styles)
function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()
    const debounced = useDebounce(searchValue, 600)

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return
        }
        const fetchApi = async () => {
            setLoading(true)
            const result = await searchServices.getSearch(debounced)
            setSearchResult(result)
            setLoading(false)


        }
        fetchApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounced])

    const handleChange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)

    }
    return (
        //! Warning tippy -> using <div> tag to prevent report warning
        <div>
            <HeadlessTippy
                interactive
                visible={searchResult.length && showResult}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('search-popper')}>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            {searchResult.map(result => (
                                <AccountItem key={result.id} data={result} />
                            ))}
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
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!setSearchValue && !loading && (
                        <button
                            className={cx('close-icon')}
                            onClick={handleClear}>
                            <CloseIcon />
                        </button>
                    )}

                    {loading && <LoadingIcon className={cx('loading-icon')} />}

                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;