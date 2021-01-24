import React, {Component} from 'react';
import Todobody from "../../container/todobody/Todobody";
import classes from './Layout.module.css';


export default class Layout extends Component {

	render() {
		return (
			<div className={classes.Layout}>
				<Todobody />
			</div>
		)
	}
}