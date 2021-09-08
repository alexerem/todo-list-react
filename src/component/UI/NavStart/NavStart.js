import React from "react";
import { NavLink } from "react-router-dom";
import './NavStart.css';

export const NavStart = () => {
	return (
		<nav className={'nav-start'}>
			<NavLink to={'/demo'} className={'btn-demo'}> DEMO </NavLink>
			<NavLink to={'/authorization'} className={'btn-authorization'}> AUTHORIZATION </NavLink>
		</nav>
	)
}