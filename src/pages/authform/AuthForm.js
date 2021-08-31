import React, { useState, useEffect } from 'react';
import classes from './AuthForm.module.css'
import ButtonAuth from "../../component/UI/ButtonAuth/ButtonAuth";
import { useForm } from 'react-hook-form';
import { auth } from '../../actions/auth';

export const AuthForm = () => {

	const [formdata, setFormdata] = useState({
		email: '',
		password: '',
		idButton: '',
		auth: false
	});

	const [authtoken, setAuthtoken] = useState({
		token: null
	});

	useEffect(() => {
		if (formdata.email !== '' && formdata.password !== '') {
			auth(formdata.email, formdata.password, formdata.idButton, authtoken, setAuthtoken)
		}
	}, [formdata])



	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data, event) => {
		if(formdata.auth) { return }

		let email = data.email
		let password = data.password
		let idButton = event.nativeEvent.submitter.id

		setFormdata({...formdata, email, password, idButton})

		console.log(formdata)
		console.log(authtoken)
	};


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
					<ButtonAuth value={'Login'} name={'login'} type={'submit'}/>
					<ButtonAuth value={'Register'} name={'register'} type={'submit'}/>
				</div>
			</form>
		</div>
	)
}