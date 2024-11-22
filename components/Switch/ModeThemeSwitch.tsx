'use client'
import React, { useState } from 'react'
import { Switch } from '../ui/switch'
import { useTheme } from 'next-themes'

const ModeThemeSwitch = () => {
    const { setTheme } = useTheme();
    const [ mode, setMode] = useState(false);

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
