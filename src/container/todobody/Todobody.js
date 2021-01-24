import React, {Component} from 'react';
import classes from './Todobody.module.css';
import {PlusCircleOutlined} from '@ant-design/icons';


export default class Todobody extends Component {

	state = {
		taskList: [],
		input: ''
	}

	changeInput(event) {
		this.setState({
			input: event.target.value
		})
		console.log(this.state.input)
	}

	buttonPlusHandler() {

	}

	render() {
		return (
			<div className={classes.Todobody}>
				<div className={classes.taskInput}>
					<label htmlFor="taskInput">Enter you task</label>
					<input type="text" id="taskInput" onChange={this.changeInput.bind(this)} />
					<div
						className={classes.buttonPlus}
						onClick={this.buttonPlusHandler()}
					>
						<PlusCircleOutlined />
					</div>
				</div>


			</div>
		)
	}
}