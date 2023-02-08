import { useSelector } from 'react-redux';
import Task from './Task';

export default function Tasklist() {
	const tasks = useSelector(state => state.tasks)

	return (
		<div className='tasklist'>
			{
				tasks.length > 0 ?

					tasks.map(task =>
						<Task key={task.id}
							task={task}
						/>
					)
					: <h2>Задачи отстутствуют</h2>
			}
		</div>
	)
}