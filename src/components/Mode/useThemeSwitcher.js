// import { useState } from "react";
// import { DarkModeSwitch } from "react-toggle-dark-mode";
// import useDarkSide from "./Darkside";
 
// export default function Switcher() {
//     const [colorTheme, setTheme] = useDarkSide();
//     const [darkSide, setDarkSide] = useState(
//         colorTheme === "light" ? true : false
//     );
 
//     const toggleDarkMode = (checked) => {
//         setTheme(colorTheme);
//         setDarkSide(checked);
//     };
 
//     return (
//         <>
//             <DarkModeSwitch
//                 style={{ marginBottom: "2rem" }}
//                 checked={darkSide}
//                 onChange={toggleDarkMode}
//                 size={30}
//             />
//         </>
//     );

import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
	const [theme, setTheme] = useState(localStorage.theme);
	const activeTheme = theme === 'dark' ? 'light' : 'dark';

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(activeTheme);
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme, activeTheme]);

	return [activeTheme, setTheme];
};

export default useThemeSwitcher;
