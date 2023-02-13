/** @typedef {import('../definitions')} */

import { createContext, useState, useEffect } from 'react'
import data from '../data/tasks.json'

export const TaskContext = createContext()

export const TaskContextProvider = ({ children }) => {
	const [tasks, setTasks] = useState([])
	
	useEffect(() => {
		setTasks(data)
	}, [])
	
	/** @param {task} task */
	const createTask = ({ title, description }) => {
		setTasks([...tasks, {
			title,
			id: tasks.length,
			description
		}])
	}
	
	/** @param {number} taskID */
	const deleteTask = taskID => {
		setTasks(tasks.filter(task => task.id !== taskID))
	}
	
	return <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
		{children}
	</TaskContext.Provider>
}