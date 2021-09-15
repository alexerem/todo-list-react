import React, {Component} from 'react';
import classes from './Todobody.module.css';
import TaskList from '../../component/TaskList/TaskList';
import ButtonAdd from "../../component/UI/ButtonAdd/ButtonAdd";


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
		if (this.state.input.length >= 1 && this.state.input[0] !== ' ') {
			let taskList = this.state.taskList
			this.setState({
				taskList: taskList.concat({value: this.state.input, checked: false}),
				input: ''
			})
		}
	}

	onKeyDown(event) {
		if (this.state.input.length >= 1 && event.key === 'Enter') {
			let taskList = this.state.taskList
			this.setState({
				taskList: taskList.concat({value: this.state.input, checked: false}),
				input: ''
			})
		}
	}

	deleteTask(event, index) {
		event.stopPropagation()
		let taskList = this.state.taskList
		taskList.splice(index, 1)
		this.setState({
			taskList: taskList
		})
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
						maxLength={78}
						onKeyDown={this.onKeyDown.bind(this)}
					/>
					<div
						className={classes.buttonPlus}
						onClick={this.buttonPlusHandler.bind(this)}
					>
						<ButtonAdd />
					</div>

				</div>

				<TaskList
					taskList={this.state.taskList}
					checkedTask={this.checkedTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)}
				/>

			</div>
		)
	}
}