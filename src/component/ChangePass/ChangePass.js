import React, {useState, useEffect} from 'react';
import "./ChangePass.css";
import classes from '../UI/ErrorMessage/ErrorMessage.module.css'
import axios from "axios";
import apikey from "../../context/auth/apikey";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";

const ChangePass = (props) => {

	const [inputState, setInputState] = useState({
		input: '',
		closeButton: false,
		errorText: null
	})

	useEffect(() => {
		if (inputState.input === '') {
			setInputState({...inputState, errorText: null})
		}
	}, [inputState.input])

	const changeInput = (event) => {
		setInputState({...inputState, input: event.target.value })
	}

	const clickCloseButton = () => {
		setInputState({...inputState, input: '', errorText: null })
		props.setMaskResetPass(false)
	}

	const showCloseButton = () => {
		setInputState({...inputState, closeButton: true})
	}

	const hideCloseButton = () => {
		setInputState({...inputState, closeButton: false})
	}

	const sendEmail = async () => {

		let email = {requestType:"PASSWORD_RESET", email:`${inputState.input}`}

		try	{
			const response = await axios.post(
				`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apikey}`, email
			)

			console.log(response.data)

		} catch (error) {

			setInputState({...inputState, errorText: null})

			if (error.response.data.error.message === 'INVALID_EMAIL') {
				setInputState({...inputState, errorText: 'INVALID_EMAIL'})
			}
			if (error.response.data.error.message === 'EMAIL_NOT_FOUND') {
				setInputState({...inputState, errorText: 'EMAIL_NOT_FOUND'})
			}

			console.log(error)
		}

	}

	return (
			<div className={`passResetMask ${props.state}`}
				 onMouseEnter={showCloseButton}
				 onMouseLeave={hideCloseButton}
			>

					{
						inputState.closeButton
							? <div
								className={'closeButton'}
								onClick={clickCloseButton}
							/>
							: null
					}

					<label htmlFor="emailInput">
						To recover your password, enter your email and follow the instructions in the email.
					</label>
					<input
						type="text" id="emailInput"
						onChange={event => changeInput(event)}
						value={inputState.input}
					/>

					<button onClick={sendEmail} > SEND </button>

					<ErrorMessage errorText={inputState.errorText}/>

			</div>
		)
}

export default ChangePass;