import React from 'react';
import classes from './module.ButtonAuth.css'

const ButtonAuth = props => {
	return (
		<button className={`btn btn-${props.type}`}>
			{props.value}
		</button>
	)
}

export default ButtonAuth;