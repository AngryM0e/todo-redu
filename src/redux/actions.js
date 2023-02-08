import { CREATE_TASK, DELETE_TASK, EDIT_TASK } from './types';

export function createTask(taskName) {
	return {
		type: CREATE_TASK,
		taskName,
	}
}

export function deleteTask(id) {
	return {
		type: DELETE_TASK,
		id
	}
}

export function editTask(id, taskName) {
	return {
		type: EDIT_TASK,
		id,
		taskName
	}
}
