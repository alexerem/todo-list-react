import React, { useContext, useEffect } from 'react';
import { AuthContext } from "../../context/auth/authContext";
import Todobody from "../../pages/todobody/Todobody";
import { AuthForm } from "../../pages/authform/AuthForm";
import classes from './Layout.module.css';
import { Switch, Route} from 'react-router-dom';
import { NavStart } from "../../component/UI/NavStart/NavStart";


export const Layout = () => {

	const auth = useContext(AuthContext)

	useEffect(() => {
		auth.autoLogin()
	}, [])

	return (
			<div className={classes.Layout}>
				<NavStart />
				<Switch>
					<Route path={'/demo'} component={Todobody} />
					<Route path={'/authorization'} component={AuthForm} />
				</Switch>
			</div>
	)
}