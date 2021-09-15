import React from 'react';
import classes from './TaskList.module.css';
import './TaskList.module.css';
import TaskItem from "../TaskItem/TaskItem";

const TaskList = props => {
	return (
		<div className={classes.TaskList}>
			{
				// eslint-disable-next-line array-callback-return
				props.taskList.map((task, index) => {

					let checked = props.taskList[index].checked ? classes.checked : ''

					if (props.taskList.length > 0) {

						return (
							<div key={index}>
								<TaskItem
									index={index}
									checked={checked}
									checkedTask={() => props.checkedTask(index)}
									deleteTask={(event) => props.deleteTask(event, index)}
									task={task}
									taskList={props.taskList}
								/>
							</div>
						)

					}
				})
			}

		</div>
	)
}

export default TaskList;