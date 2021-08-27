import React from 'react';
import classes from './AuthForm.module.css'
import ButtonAuth from "../../component/UI/ButtonAuth/ButtonAuth";
import { useForm } from 'react-hook-form';

export const AuthForm = () => {
	return (
		<div className={classes.AuthForm}>
			<form className={classes.form}>
				<p>Please log in or register!</p>
				<div className={classes.formGroup}>
					<label htmlFor="email">Email address:</label>
					<input type="email" name="email" id="email"/>
				</div >
				<div className={classes.formGroup}>
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" id="password"/>
				</div>
				<div className={classes.input}>
					<ButtonAuth value={'Login'} type={'login'}/>
					<ButtonAuth value={'Register'} type={'register'}/>
				</div>
			</form>
		</div>
	)
}