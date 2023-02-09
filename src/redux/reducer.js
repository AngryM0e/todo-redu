import { CREATE_TASK, DELETE_TASK, EDIT_TASK } from './types';

export const initialState = {
	tasks: [
		{
			id: 1,
			taskName: 'Hello 1',
		},
	],

}


export default function reducer(state = initialState, action) {

	switch (action.type) {
		case CREATE_TASK:
			return {
				...state,
				tasks: [...state.tasks, {
					id: Date.now().toString().slice(-4),
					taskName: action.taskName,
				}]
			}

		case DELETE_TASK:
			const filteredTasks = state.tasks.filter(task => task.id !== action.id);
			return {
				...state,
				tasks: filteredTasks,
			}

		case EDIT_TASK:
			return {
				...state,
				tasks: state.tasks.map(task => {
					if (task.id === action.id) {
						task.taskName = action.taskName
					}
					return task
				})

			}
		default: return state;
	}
}