/**
 * @typedef {object} task
 * @property {int} task.id
 * @property {string} task.title
 * @property {string} task.description
 */

/**
 * @typedef {task[]} tasks
 */

/**
 * @typedef {object} props
 * @property {JSX.Element} props.children
 * @property {task} props.task
 */

/**
 * @typedef {object} context
 * @property {tasks} context.tasks
 * @property {(task: task) => void} context.createTask
 * @property {(taskID: number)} context.deleteTask
 */