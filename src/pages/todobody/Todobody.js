import React, {useState, useContext, useEffect} from 'react';
import classes from './Todobody.module.css';
import TaskList from '../../component/TaskList/TaskList';
import ButtonAdd from "../../component/UI/ButtonAdd/ButtonAdd";
import {AuthContext} from "../../context/auth/authContext";
import axios from "../../axios/axios-database";
import Loader from "../../component/UI/Loader/Loader";

const Todobody = () => {

	const auth = useContext(AuthContext)

	let state;
	if (auth.token) {
		state = {
			taskList: [],
			input: '',
			changeState: false,
			loader: true
		}
	} else {
		state = {
			taskList: [],
			input: '',
			changeState: false,
			loader: false
		}
	}

	const [todoState, setTodoState] = useState(state)

	useEffect( () => {
		(async function() {
			if(auth.token) {
				try {

					const response = await axios.get(`/users/${auth.userId}.json?auth=${auth.token}`)

					const taskList = []

					if(response.data !== null && response.data !== undefined) {

						Object.values(response.data).forEach((task) => { taskList.push(task) })

						const keys = Object.keys(response.data)
						sessionStorage.setItem('nameKeysTodoDB', JSON.stringify(keys))

					} else {
						setTodoState({...todoState, taskList: taskList, loader: false})
					}

					setTodoState({...todoState, taskList: taskList, loader: false})

				} catch (error) {
					console.log(error)
				}
			}
			if(!auth.token) {
				setTodoState({...todoState, loader: false})
			}
		})();
	},[auth.token, auth.userId, todoState.changeState]) // eslint-disable-line react-hooks/exhaustive-deps

	const changeInput = (event) => {
		setTodoState({
			...todoState,
			input: event.target.value
		})
	}

	const buttonPlusHandler = async () => {
		if (todoState.input.length >= 1 && todoState.input[0] !== ' ') {
			if(auth.token) {
				let taskList = {value: todoState.input, checked: false}
				try {
					await axios.post(`/users/${auth.userId}.json?auth=${auth.token}`, taskList)

					setTodoState({...todoState, input: '', changeState: !todoState.changeState})
				} catch (error) {
					console.log(error)
				}
			} else {
				let taskList = todoState.taskList
				setTodoState({
					taskList: taskList.concat({value: todoState.input, checked: false}),
					input: ''
				})
			}
		}
	}

	const onKeyDown = async (event) => {
		if (todoState.input.length >= 1 && event.key === 'Enter' && todoState.input[0] !== ' ') {
			if(auth.token) {

				let taskList = {value: todoState.input, checked: false}

				try {
					await axios.post(`/users/${auth.userId}.json?auth=${auth.token}`, taskList)

					setTodoState({...todoState, input: '', changeState: !todoState.changeState})
				} catch (error) {
					console.log(error)
				}
			} else {
				let taskList = todoState.taskList
				setTodoState({
					taskList: taskList.concat({value: todoState.input, checked: false}),
					input: ''
				})
			}
		}
	}

	const deleteTask = async (event, index) => {
		event.stopPropagation()
		if(auth.token) {
			let nameKeysTodoDB = sessionStorage.getItem('nameKeysTodoDB')
			let keysTodoDB = JSON.parse(nameKeysTodoDB)

			try {
				await axios.delete(`/users/${auth.userId}/${keysTodoDB[index]}.json?auth=${auth.token}`)

				setTodoState({...todoState, changeState: !todoState.changeState})
			} catch (error) {
				console.log(error)
			}

		} else {
			let taskList = todoState.taskList
			taskList.splice(index, 1)

			setTodoState({...todoState, taskList: taskList})
		}
	}


	const checkedTask = async (index) => {
		if(auth.token) {
			try {
				let nameKeysTodoDB = sessionStorage.getItem('nameKeysTodoDB')
				let keysTodoDB = JSON.parse(nameKeysTodoDB)

				let changeChecked = todoState.taskList[index].checked
				await axios.patch(`/users/${auth.userId}/${keysTodoDB[index]}.json?auth=${auth.token}`, {checked: !changeChecked})

				setTodoState({...todoState, changeState: !todoState.changeState})
			} catch (error) {
				console.log(error)
			}
		} else {
			let changeChecked = todoState.taskList
			changeChecked[index].checked = !changeChecked[index].checked

			setTodoState( {...todoState, taskList: changeChecked})
		}
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

				{
					todoState.loader
						? <Loader />
						: null
				}

				<TaskList
					taskList={todoState.taskList}
					checkedTask={checkedTask.bind(this)}
					deleteTask={deleteTask.bind(this)}
				/>

			</div>
		)

}

export default Todobody;