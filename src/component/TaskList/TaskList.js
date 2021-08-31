import React from 'react';
import classes from './TaskList.module.css';
import './TaskList.module.css';
import {CheckCircleTwoTone} from '@ant-design/icons';

const TaskList = props => {
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
							>
								<p>{task.value}</p>

								{
									props.taskList[index].checked
										?
									<div className={classes.checkedIcon}>
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