/** @typedef {import('../definitions')} */

import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const TaskForm = () => {
	/** @type {context} */
	const { createTask } = useContext(TaskContext)
	
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	
	/** @param {Event} e */
	const handleSubmit = e => {
		e.preventDefault()
		createTask({ title, description })
		setTitle('')
		setDescription('')
		e.target.reset()
	}
	
	return <div className="max-w-md mx-auto">
		<form
			onSubmit={handleSubmit}
			className="bg-slate-800 p-10 mb-4">
			<h1 className="text-2xl font-bold text-white mb-3">Create your task</h1>
			<input
				autoFocus
				placeholder="Write your task title"
				onChange={e => setTitle(e.target.value)}
				className="bg-slate-300 p-3 w-full mb-2" />
			<textarea
				placeholder="Write your task description"
				onChange={e => setDescription(e.target.value)}
				className="bg-slate-300 p-3 w-full mb-2"></textarea>
			<button className="bg-indigo-500 px-3 py-1 text-white">Save</button>
		</form>
	</div>
}

export default TaskForm