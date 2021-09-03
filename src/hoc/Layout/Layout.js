import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../../context/auth/authContext";
import Todobody from "../../pages/todobody/Todobody";
import {AuthForm} from "../../pages/authform/AuthForm"
import classes from './Layout.module.css';


export const Layout = () => {

	const auth = useContext(AuthContext)

	useEffect(() => {
		console.log(auth)
		auth.autoLogin()
	})

	return (
		<div className={classes.Layout}>
			<AuthForm />
			<Todobody />
		</div>
	)
}