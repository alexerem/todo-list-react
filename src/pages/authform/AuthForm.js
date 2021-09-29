import React, {useState, useEffect, useContext} from 'react';
import classes from './AuthForm.module.css'
import ButtonAuth from "../../component/UI/ButtonAuth/ButtonAuth";
import { useForm } from 'react-hook-form';
import {AuthContext} from "../../context/auth/authContext";
import ErrorMessage from "../../component/UI/ErrorMessage/ErrorMessage";

export const AuthForm = () => {

	const auth = useContext(AuthContext)

	const [formdata, setFormdata] = useState({
		email: '',
		password: '',
		idButton: ''
	});

	useEffect(() => {
		if (formdata.email !== '' && formdata.password !== '') {
			auth.auth(formdata.email, formdata.password, formdata.idButton)
			setFormdata({...formdata, email: '', password: '', idButton: ''})
			auth.changeErrorAuth(null)
		}
	}, [auth, formdata])


	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = (data, event) => {
		if(auth.token) return

		let email = data.email
		let password = data.password
		let idButton = event.nativeEvent.submitter.id

		setFormdata({...formdata, email, password, idButton})
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

				<ErrorMessage errorText={auth.errorAuth}/>

			</form>
		</div>
	)
}