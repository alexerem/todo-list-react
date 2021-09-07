import React from "react";
import { NavLink } from "react-router-dom";
import './NavStart.css';

export const NavStart = () => {
	return (
		<nav className={'nav-start'}>
			<ul>
				<li>
					<NavLink to={'/demo'}> DEMO </NavLink>
				</li>
				<li>
					<NavLink to={'/authorization'}> AUTHORIZATION </NavLink>
				</li>
			</ul>
		</nav>
	)
}