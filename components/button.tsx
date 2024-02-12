'use client'
import {useState}  from 'react'


export default function ThemeSwitcher() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        document.body.classList.toggle('light_theme');
        document.body.classList.toggle('dark_theme');
    }

    return (
        <button  className={`${theme} buttonClassName`} onClick={toggleTheme} type='button'>
            {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
        </button>
    )
}
