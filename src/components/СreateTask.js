import { createTask } from '../redux/actions'
import { useState } from 'react';
import { useDispatch } from 'react-redux';


export default function CreateTask(props) {
	const [inputValue, setValue] = useState('');
	const dispatch = useDispatch();

	const onClick = () => {
		if (inputValue !== '') {
			dispatch(createTask(inputValue));
			setValue('');
		}

	}

	return (
		<div className='createTask'>
			<input type="text" value={inputValue} onChange={e => setValue(e.target.value)} />
			<button type='button' onClick={onClick}>Добавить</button>
		</div>
	)
}