import React from "react";
import classes from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {

	if(props.errorText === null) {
		return null
	}

	if(props.errorText === 'INVALID_PASSWORD') {
		return (
			<div className={classes.ErrorMessage}>
				<p>INVALID PASSWORD</p>
			</div>
		)
	}

	if(props.errorText.includes('TOO_MANY_ATTEMPTS_TRY_LATER')) {
		return (
			<div className={classes.ErrorMessage}>
				<p></p>
			</div>
		)
	}

	if(props.errorText === 'EMAIL_NOT_FOUND') {
		return (
			<div className={classes.ErrorMessage}>
				<p>EMAIL NOT FOUND</p>
			</div>
		)
	}

}

export default ErrorMessage;