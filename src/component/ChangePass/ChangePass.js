import React, {useState} from 'react';
import classes from "../../pages/authform/AuthForm.module.css";

const ChangePass = () => {

	const [inputState, setInputState] = useState({input: ''})

	const changeInput = (event) => {
		setInputState({
			...inputState,
			input: event.target.value
		})
	}

	const sendEmail = () => {
		console.log(inputState.input)
	}

	return (
			<div className={classes.passResetMask}>
					<label htmlFor="emailInput">
						To recover your password, enter your email and follow the instructions in the email.
					</label>
					<input
						type="text" id="emailInput"
						onChange={event => changeInput(event)}
					/>
					<button onClick={sendEmail}>Send</button>
			</div>
		)
}

export default ChangePass;