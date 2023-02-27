import Context from './Context';
import { useState } from 'react';

function Provider({ children }) {
    const [theme, setTheme] = useState('light')
    const handleClick = () => {
        if (theme === "dark") {
            // i18n.changeLanguage('en')
            setTheme("light")
        } else {
            // i18n.changeLanguage('vn')
            setTheme("dark")
        }
    }
    const value = {
        theme: theme,
        handleClick
    }
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}

export default Provider;