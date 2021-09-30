import React from "react";
import classes from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {

	if(props.errorText === null) {
		return null
	}

	if(props.errorText === 'INVALID_PASSWORD') {
		return (
			<div className={classes.ErrorMessage}>
				<p>Invalid password</p>
			</div>
		)
	}

	if(props.errorText.includes('TOO_MANY_ATTEMPTS_TRY_LATER')) {
		return (
			<div className={classes.ErrorMessage}>
				<p>Too many attempts try later</p>
			</div>
		)
	}

	if(props.errorText === 'EMAIL_NOT_FOUND') {
		return (
			<div className={classes.ErrorMessage}>
				<p>Email not found</p>
			</div>
		)
	}

	if(props.errorText === 'EMAIL_EXISTS') {
		return (
			<div className={classes.ErrorMessage}>
				<p>Email exists</p>
			</div>
		)
	}

	if(props.errorText === 'USER_DISABLED') {
		return (
			<div className={classes.ErrorMessage}>
				<p>User disabled</p>
			</div>
		)
	}

}

export default ErrorMessage;