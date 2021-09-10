import React, {useState} from 'react';
import classes from './TaskList.module.css';
import './TaskList.module.css';
import {CheckCircleTwoTone} from '@ant-design/icons';
import {ButtonDelTask} from "../UI/ButtonDelTask/ButtonDelTask";

const TaskList = props => {

	// const [delButton, setDelButton] = useState({delButton: false})
	// const showDelButton = () => {
	// 	setDelButton({delButton: true})
	// }
	// const hideDelButton = () => {
	// 	setDelButton({delButton: false})
	// }

	return (
		<div className={classes.TaskList}>
			{
				// eslint-disable-next-line array-callback-return
				props.taskList.map((task, index) => {

					let checked = props.taskList[index].checked ? classes.checked : ''

					if (props.taskList.length > 0) {

						return (
							<div
								key={index}
								className={classes.TaskItem + ' ' + checked}
								onClick={() => props.checkedTask(index)}
								// onMouseOver={showDelButton}
								// onMouseOut={hideDelButton}
							>
								<p>{task.value}</p>

								{/*{*/}
								{/*	delButton.delButton*/}
								{/*		?*/}
								{/*	< ButtonDelTask />*/}
								{/*		:*/}
								{/*	null*/}
								{/*}*/}

								< ButtonDelTask />

								{
									props.taskList[index].checked
										?
									<div className={classes.checkedIcon} >
										<CheckCircleTwoTone twoToneColor="#52c41a" />
									</div>
										:
									null
								}

							</div>
						)
					}
				})
			}

		</div>
	)
}

export default TaskList;