import React, {useState} from "react";
import classes from '../TaskList/TaskList.module.css';
import '../TaskList/TaskList.module.css';
import {CheckCircleTwoTone} from '@ant-design/icons';
import {ButtonDelTask} from "../UI/ButtonDelTask/ButtonDelTask";
import LoaderChecked from "../UI/LoaderChecked/LoaderChecked";

const TaskItem = props => {

	const [delButton, setDelButton] = useState({delButton: false})
	const showDelButton = () => {
		setDelButton({delButton: true})
	}
	const hideDelButton = () => {
		setDelButton({delButton: false})
	}

	const [loaderChecked, setLoaderChecked] = useState({loaderChecked: false})

	const clickTask = async () => {
		setLoaderChecked({loaderChecked: true})

		await props.checkedTask(props.index)

		setLoaderChecked({loaderChecked: false})
	}

		return (
			<div
				className={classes.TaskItem + ' ' + props.checked}
				onClick={clickTask}
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

				{
					loaderChecked.loaderChecked
						?
					<LoaderChecked />
						:
					null
				}

			</div>
		)
}

export default TaskItem;