import React, {useState} from 'react';
import "./ChangePass.css";

const ChangePass = (props) => {

	const [inputState, setInputState] = useState({input: ''})
	const [closeButton, setCloseButton] = useState(false)

	const changeInput = (event) => {
		setInputState({ input: event.target.value })
	}

	const showCloseButton = () => {
		setCloseButton(true)
	}

	const hideCloseButton = () => {
		setCloseButton(false)
	}

	const sendEmail = () => {
		console.log(inputState.input)
	}

	console.log(props.state)

	return (
			<div className={`passResetMask ${props.state}`}
				 onMouseEnter={showCloseButton}
				 onMouseLeave={hideCloseButton}
			>

					{
						closeButton
							? <div
								className={'closeButton'}
								onClick={() => props.setMaskResetPass(false)}
							/>
							: null
					}

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