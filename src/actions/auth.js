import axios from "axios";

export async function auth(email, password, idButton, authtoken, setAuthtoken) {
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

	console.log(data)

	const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

	localStorage.setItem('token', data.idToken)
	localStorage.setItem('userId', data.localId)
	localStorage.setItem('expirationDate', expirationDate)

	setAuthtoken({...authtoken, token: data.idToken})
}