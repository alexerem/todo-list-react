import React from 'react';
import './module.ButtonAuth.css';

const ButtonAuth = props => {
	return (
		<button className={`btn btn-${props.forInput}`} type={props.type}>
			{props.value}
		</button>
	)
}

export default ButtonAuth;