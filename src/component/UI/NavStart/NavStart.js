import React from "react";
import { NavLink } from "react-router-dom";
import './NavStart.css';

export const NavStart = () => {
	return (
		<nav className={'nav-start'}>
			<ul>
				<li>
					<NavLink to={'/demo'}> Demo </NavLink>
				</li>
				<li>
					<NavLink to={'/authorization'}> Authorization </NavLink>
				</li>
			</ul>
		</nav>
	)
}