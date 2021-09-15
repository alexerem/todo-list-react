import React, {useState} from "react";
import {DeleteTwoTone} from '@ant-design/icons';
import './ButtonDelTask.css';

export const ButtonDelTask = () => {

	const [color, setColor] = useState({color: '#ff6161'})

	const colorOver = () => {
		setColor({color: '#ff0000'});
	}

	const colorDown = () => {
		setColor({color: '#ff6161'});
	}

	return (
		<div className={'deleteIcon'} onMouseEnter={colorOver} onMouseLeave={colorDown} >
			<DeleteTwoTone twoToneColor={color.color} />
		</div>
	)
}