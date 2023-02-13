/** @typedef {import('../definitions')} */

import { useContext } from 'react'
import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'

const TaskList = () => {
	/** @type {context} */
	const { tasks } = useContext(TaskContext)
	
	if (tasks.length === 0) {
		return <h1 className="text-white text-4xl font-bold text-center">
			There isn't tasks
		</h1>
	}
	
	return <div className="grid grid-cols-4 gap-2">
		{tasks.map(task => <div key={task.id}>
			<TaskCard task={task} />
		</div>)}
	</div>
}

export default TaskList