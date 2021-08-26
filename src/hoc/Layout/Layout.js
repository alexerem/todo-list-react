import React, {Component} from 'react';
import Todobody from "../../pages/todobody/Todobody";
import {AuthForm} from "../../pages/authform/AuthForm"
import classes from './Layout.module.css';


export default class Layout extends Component {

	render() {
		return (
			<div className={classes.Layout}>
				<AuthForm />
				<Todobody />
			</div>
		)
	}
}