import React from "react";
import { NavLink } from "react-router-dom";
import './NavStart.css';

export const NavStart = (props) => {

	if (props.authorization === true) {
		return (
			<nav className={'nav-start'}>
				<NavLink to={'/to-do'} className={'btn-todo'}> MY TO-DO </NavLink>
				<NavLink to={'/info'} className={'btn-info'}> INFO </NavLink>
			</nav>
		)
	}

	if (props.authorization === false) {
		return (
			<nav className={'nav-start'}>
				<NavLink to={'/demo'} className={'btn-demo'}> DEMO </NavLink>
				<NavLink to={'/authorization'} className={'btn-authorization'}> AUTHORIZATION </NavLink>
			</nav>
		)
	}

}