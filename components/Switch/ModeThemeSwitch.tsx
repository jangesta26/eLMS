'use client'
import React, { useState, useEffect } from 'react'
import { Switch } from '../ui/switch'
import { useTheme } from 'next-themes'

const ModeThemeSwitch = () => {
    const { setTheme, theme } = useTheme();
    const [mode, setMode] = useState(false);

    useEffect(() => {
        if (theme === 'dark') {
            setMode(true);
        } else {
            setMode(false);
        }
    }, [theme]);

    const handleChangeMode = () => {
        const newMode = !mode;
        setMode(newMode);
        setTheme(newMode ? 'dark' : 'light'); 
    };

    return (
        <Switch
            checked={mode}
            onCheckedChange={handleChangeMode}
        />
    )
}

export default ModeThemeSwitch
