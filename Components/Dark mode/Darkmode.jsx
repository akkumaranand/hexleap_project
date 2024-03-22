"use client";
import React, { useEffect, useState } from 'react';
import './DarkMode.css';

export default function Darkmode() {
    const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem("selectedTheme") || "light");

    useEffect(() => {
        if (selectedTheme === "dark") {
            SetDarkMode();
        } else {
            SetLightMode();
        }
    }, [selectedTheme]);

    const toggletheme = (e) => {
        e.target.checked ? SetDarkMode() : SetLightMode();
    };

    const SetDarkMode = () => {
        document.documentElement.classList.add('dark');
        localStorage.setItem("selectedTheme", "dark");
    };

    const SetLightMode = () => {
        document.documentElement.classList.remove('dark');
        localStorage.setItem("selectedTheme", "light");
    };

    return (
        <input type='checkbox' id="toggle" onChange={toggletheme} defaultChecked={selectedTheme === "dark"} />
    );
}

