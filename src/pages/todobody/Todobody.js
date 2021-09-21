import React, {useState} from 'react';
import classes from './Todobody.module.css';
import TaskList from '../../component/TaskList/TaskList';
import ButtonAdd from "../../component/UI/ButtonAdd/ButtonAdd";

const Todobody = () => {

	const [todoState, setTodoState] = useState({
		taskList: [],
		input: ''
	})

	const changeInput = (event) => {
		setTodoState({
			...todoState,
			input: event.target.value
		})
	}

	const buttonPlusHandler = () => {
		if (todoState.input.length >= 1 && todoState.input[0] !== ' ') {
			let taskList = todoState.taskList
			setTodoState({
				taskList: taskList.concat({value: todoState.input, checked: false}),
				input: ''
			})
		}
	}

	const onKeyDown = (event) => {
		if (todoState.input.length >= 1 && event.key === 'Enter') {
			let taskList = todoState.taskList
			setTodoState({
				taskList: taskList.concat({value: todoState.input, checked: false}),
				input: ''
			})
		}
	}

	const deleteTask = (event, index) => {
		event.stopPropagation()
		let taskList = todoState.taskList
		taskList.splice(index, 1)
		setTodoState({
			...todoState,
			taskList: taskList
		})
	}


	const checkedTask = (index) => {
		let changeChecked = todoState.taskList
		changeChecked[index].checked = !changeChecked[index].checked
		setTodoState( {
			...todoState,
			taskList: changeChecked
		})
	}

		return (
			<div className={classes.Todobody}>

				<div className={classes.taskInput} >
					<label htmlFor="taskInput">Enter you task</label>
					<input
						type="text" id="taskInput"
						onChange={event => changeInput(event)}
						value={todoState.input}
						maxLength={78}
						onKeyDown={event => onKeyDown(event)}
					/>
					<div
						className={classes.buttonPlus}
						onClick={(event) => buttonPlusHandler(event)}
					>
						<ButtonAdd />
					</div>

				</div>

				<TaskList
					taskList={todoState.taskList}
					checkedTask={checkedTask.bind(this)}
					deleteTask={deleteTask.bind(this)}
				/>

			</div>
		)

}

export default Todobody;