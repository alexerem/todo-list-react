import React from 'react';
import classes from './AuthForm.module.css'

export const AuthForm = () => {
	return (
		<div className={classes.AuthForm}>
			<form className={classes.form}>
				<p>Please log in or register!</p>
				<div className={classes.formGroup}>
					<label htmlFor="email">Email adress</label>
					<input type="email" name="email" />
				</div >
				<div className={classes.formGroup}>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" />
				</div>
				<button></button>
				<button></button>
			</form>
		</div>
	)
}