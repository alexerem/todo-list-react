import React, {useState, useEffect} from 'react';
import "./ChangePass.css";
import axios from "axios";
import apikey from "../../context/auth/apikey";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import LoaderResetPass from "../UI/LoaderResetPass/LoaderResetPass";
import iconSuccess from "../../img/svg/icon-success.svg";

const ChangePass = (props) => {

	const [inputState, setInputState] = useState({
		input: '',
		closeButton: false,
		errorText: null,
		loader: false,
		successEmail: false
	})

	useEffect(() => {
		if (inputState.input === '') {
			setInputState({...inputState, errorText: null, successEmail: false})
		}
	}, [inputState.input]) // eslint-disable-line react-hooks/exhaustive-deps

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

		setInputState({...inputState, errorText: null, loader: true, successEmail: false})

		try	{

			await axios.post(
				`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apikey}`, email
			)

			setInputState({...inputState, errorText: null, successEmail: true })

		} catch (error) {

			if (error.response.data.error.message === 'INVALID_EMAIL') {
				setInputState({...inputState, errorText: 'INVALID_EMAIL', successEmail: false})
			}
			if (error.response.data.error.message === 'EMAIL_NOT_FOUND') {
				setInputState({...inputState, errorText: 'EMAIL_NOT_FOUND', successEmail: false})
			}

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

					{
						inputState.successEmail
							?
						<div>
							<img src={iconSuccess} style={{height:90}} alt="Success"/>
						</div>
							:
						null
					}

					{
						inputState.loader
							?
						<LoaderResetPass />
							:
						null
					}

			</div>
		)
};

export default ChangePass;