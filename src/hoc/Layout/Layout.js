import React, { useContext, useEffect } from 'react';
import { AuthContext } from "../../context/auth/authContext";
import Todobody from "../../pages/todobody/Todobody";
import { AuthForm } from "../../pages/authform/AuthForm";
import classes from './Layout.module.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import { NavStart } from "../../component/UI/NavStart/NavStart";
import { Info } from "../../component/UI/Info/Info";


export const Layout = () => {

	const auth = useContext(AuthContext)

	useEffect(() => {
		auth.autoLogin()
	}, [])

	if (auth.token === null) {
		return (
			<div className={classes.Layout}>
				<NavStart
					authorization={false}
				/>
				<Switch>
					<Route path={'/demo'} exact component={Todobody}/>
					<Route path={'/authorization'} exact component={AuthForm}/>
					<Redirect to={'/authorization'}/>
					<Redirect from={'/'} to={'/authorization'}/>
				</Switch>
			</div>
		)
	}

	if (auth.token)	{
		return (
			<div className={classes.Layout}>
				<NavStart
					authorization={true}
				/>
				<Switch>
					<Route path={'/to-do'} exact component={Todobody}/>
					<Route path={'/info'} exact component={Info}/>
					<Redirect to={'/to-do'}/>
					<Redirect from={'/'} to={'/to-do'}/>
				</Switch>
			</div>
		)
	}

}