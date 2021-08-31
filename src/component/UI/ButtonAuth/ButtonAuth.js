import React from 'react';
import './module.ButtonAuth.css';

const ButtonAuth = props => {
	return (
		<button className={`btn btn-${props.name}`} type={props.type} name={props.name} id={props.name}>
			{props.value}
		</button>
	)
}

export default ButtonAuth;