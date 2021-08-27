import React, { useState } from 'react';
import classes from './AuthForm.module.css'
import ButtonAuth from "../../component/UI/ButtonAuth/ButtonAuth";
import { useForm } from 'react-hook-form';

export const AuthForm = () => {

	const { register, handleSubmit, formState: { errors } } = useForm();
	const [result, setResult] = useState("");
	const onSubmit = (data) => { setResult(data) };

	return (
		<div className={classes.AuthForm}>
			<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
				<p>Please log-in or register!</p>
				<div className={classes.formGroup}>
					<label htmlFor="email">Email address:</label>
					<input id={'email'} type={'text'}
						   {...register("email", {required: true, pattern: /^[^@]+@[^@.]+\.[^@]+$/ })}
					/>

					{errors.email && errors.email.type === "required" && (
						<span role="alert">This field is required</span>
					)}
					{errors.email && errors.email.type === "pattern" && (
						<span role="alert">Enter valid email</span>
					)}

				</div >

				<div className={classes.formGroup}>
					<label htmlFor="password">Password:</label>
					<input id={'password'} type={'password'}
						   {...register("password", { required: true, minLength: 8 })}
					/>

					{errors.password && errors.password.type === "required" && (
						<span role="alert">This field is required</span>
					)}
					{errors.password && errors.password.type === "minLength" && (
						<span role="alert">Enter more than 8 characters</span>
					)}

				</div>

				<div className={classes.input}>
					<ButtonAuth value={'Login'} forInput={'login'} type={'submit'}/>
					<ButtonAuth value={'Register'} forInput={'register'} type={'submit'}/>
				</div>
			</form>
		</div>
	)
}