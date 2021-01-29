import React, {Component} from 'react';
import classes from './Todobody.module.css';
import {PlusCircleOutlined} from '@ant-design/icons';
import TaskList from '../../component/TaskList/TaskList';
import ButtonDelChange from "../../component/ButtonDelChange/ButtonDelChange";


export default class Todobody extends Component {

	state = {
		taskList: [],
		input: ''
	}

	changeInput(event) {
		this.setState({
			input: event.target.value
		})
	}

	buttonPlusHandler() {
		if (this.state.input.length >= 1) {
			let taskList = this.state.taskList
			this.setState({
				taskList: taskList.concat({value: this.state.input, checked: false}),
				input: ''
			})
		}
	}

	checkedTask(index) {
		let changeChecked = this.state.taskList
		changeChecked[index].checked = !changeChecked[index].checked
		this.setState( {
			taskList: changeChecked
		})
	}

	checked(item) {
		return item.checked === true
	}

	render() {
		return (
			<div className={classes.Todobody}>

				<div className={classes.taskInput} >
					<label htmlFor="taskInput">Enter you task</label>
					<input
						type="text" id="taskInput"
						onChange={this.changeInput.bind(this)}
						value={this.state.input}
					/>
					<div
						className={classes.buttonPlus}
						onClick={this.buttonPlusHandler.bind(this)}
					>
						<PlusCircleOutlined />
					</div>

					{
						this.state.taskList.some(this.checked)
							?
						<ButtonDelChange />
							:
						null
					}

				</div>

				<TaskList
					taskList={this.state.taskList}
					checkedTask={this.checkedTask.bind(this)}
				/>

			</div>
		)
	}
}