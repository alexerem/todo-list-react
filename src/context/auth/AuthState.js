import React, {useReducer} from 'react';
import axios from "axios";
import authReducer from "./authReducer";
import {AuthContext} from "./authContext";
import {AUTH_LOGIN, AUTH_LOGOUT} from "../types";

export const AuthState = ({children}) => {

	const [state, dispatch] = useReducer(
		authReducer, {
			token: null,
			userId: null,
			email: null
		}
	);


	const auth = async (email, password, idButton) => {
		const authData = {
			email,
			password,
			returnSecureToken: true
		}

		let url = null;

		if (idButton === 'login') {
			url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYyWGrPEtqMUEv-s5HSYhzxD91pt6AIu0'
		}
		if (idButton === 'register') {
			url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYyWGrPEtqMUEv-s5HSYhzxD91pt6AIu0'
		}

		const response = await axios.post(url, authData)
		const data = response.data

		const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

		localStorage.setItem('token', data.idToken)
		localStorage.setItem('userId', data.localId)
		localStorage.setItem('expirationDate', expirationDate)
		localStorage.setItem('email', data.email)

		addToken(data.idToken, data.localId, data.email)
		autoLogout(data.expiresIn)
	}

	const logout = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('userId')
		localStorage.removeItem('expirationDate')
		localStorage.removeItem('email')

		deleteToken()
	}

	const autoLogout = (time) => {
		setTimeout(
			() => logout()
		, time * 1000)
	}

	const autoLogin = () => {
		const token = localStorage.getItem('token')
		const userId = localStorage.getItem('userId')
		const email = localStorage.getItem('email')

		if(!token) {
			logout()
		} else {
			const expirationDate = new Date(localStorage.getItem('expirationDate'))
			if (expirationDate <= new Date()) {
				logout()
			} else {
				addToken(token, userId, email)
				autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000 )
			}
		 }
	}

	const addToken = (token, userId, email) => dispatch({type: AUTH_LOGIN, token: token, userId: userId, email: email})

	const deleteToken = () => dispatch({type: AUTH_LOGOUT})

	const {token, userId, email} = state

	return (
		<AuthContext.Provider value={{
			auth, logout, autoLogout, addToken, deleteToken, autoLogin,
			token, userId, email
		}}>
			{children}
		</AuthContext.Provider>
	)
}