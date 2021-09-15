import React, {useState} from "react";
import classes from '../TaskList/TaskList.module.css';
import '../TaskList/TaskList.module.css';
import {CheckCircleTwoTone} from '@ant-design/icons';
import {ButtonDelTask} from "../UI/ButtonDelTask/ButtonDelTask";

const TaskItem = props => {

	const [delButton, setDelButton] = useState({delButton: false})
	const showDelButton = () => {
		setDelButton({delButton: true})
	}
	const hideDelButton = () => {
		setDelButton({delButton: false})
	}

		return (
			<div
				className={classes.TaskItem + ' ' + props.checked}
				onClick={() => props.checkedTask(props.index)}
				onMouseEnter={showDelButton}
				onMouseLeave={hideDelButton}
			>
				<p>{props.task.value}</p>

				{
					delButton.delButton
						?
					<div
						onClick={(event) => props.deleteTask(event, props.index)}
					>
						< ButtonDelTask />
					</div>
					:
					null
				}

				{
					props.taskList[props.index].checked
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

export default TaskItem;