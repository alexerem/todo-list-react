import React from 'react';
import classes from './TaskList.module.css';
import './TaskList.module.css';

const TaskList = props => {
	return (
		<div className={classes.TaskList}>
			{
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
							</div>
						)
					}
				})
			}
		</div>
	)
}

export default TaskList;