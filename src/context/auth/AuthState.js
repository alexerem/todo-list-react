import React, {useReducer} from 'react';
import axios from "axios";
import authReducer from "./authReducer";
import {AuthContext} from "./authContext";
import {AUTH_LOGIN, AUTH_LOGOUT} from "../types";

export const AuthState = ({children}) => {

	const [state, dispatch] = useReducer(
		authReducer, { token: null }
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

		addToken(data.idToken)
		autoLogout(data.expiresIn)
	}

	const logout = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('userId')
		localStorage.removeItem('expirationDate')

		deleteToken()
	}

	const autoLogout = (time) => {
		setTimeout(
			() => logout()
		, time * 1000)
	}

	const autoLogin = () => {
		const token = localStorage.getItem('token')
		if(!token) {
			logout()
		} else {
			const expirationDate = new Date(localStorage.getItem('expirationDate'))
			if (expirationDate <= new Date()) {
				logout()
			} else {
				addToken(token)
				autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000 )
			}
		 }
	}

	const addToken = (token) => dispatch({type: AUTH_LOGIN, payload: token})

	const deleteToken = () => dispatch({type: AUTH_LOGOUT})

	const {token} = state

	return (
		<AuthContext.Provider value={{
			auth, logout, autoLogout, addToken, deleteToken, autoLogin,
			token
		}}>
			{children}
		</AuthContext.Provider>
	)
}