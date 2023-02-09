import { useRef, useState, useEffect } from 'react';
import { TfiMarkerAlt, TfiClose } from 'react-icons/tfi'
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

export default function Task(props) {

	const { task } = props;
	const dispatch = useDispatch()
	const inputRef = useRef();
	const [inputToogle, toogleValue] = useState(true)

	useEffect(() => {
		inputRef.current.focus();
	}, [task]);


	const deleteHandler = (e) => {
		e.preventDefault()
		dispatch(deleteTask(task.id));
	}

	const toogleInput = () => {
		toogleValue(!inputToogle)
	}

	const changeHandler = (e) => {
		dispatch(editTask(task.id, e.target.value))
	}




	return (
		<div className="task">
			<input ref={inputRef} type="text" disabled={inputToogle} value={task.taskName} onChange={changeHandler} />

			<div className="buttons">
				<TfiMarkerAlt className='edit-button' onClick={toogleInput} />
				<TfiClose className='delete-button' onClick={deleteHandler} />
			</div>
		</div>
	)
}