import React from "react";
import classes from './ButtonDelChange.module.css';

const ButtonDelChange = props => {
	return (
		<div
			className={classes.ButtonDelChange}
			onClick={() => props.buttonDelChange()}
		>
			<p>Delete selected</p>
		</div>
	)
}

export default ButtonDelChange;