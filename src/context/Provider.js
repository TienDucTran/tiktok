import Context from './Context';
import { useEffect, useState } from 'react';

function Provider({ children }) {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light',
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); // Save theme in localStorage
    }, [theme]);

    const handleClick = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme); // Update localStorage
            return newTheme;
        });
    };
    const value = {
        theme: theme,
        handleClick,
    };
    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
