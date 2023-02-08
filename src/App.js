import React from 'react';
import CreateTask from './components/СreateTask';
import Tasklist from './components/Tasklist'


class App extends React.Component {
	
	render() {
		return (
			<div className='App'>
				<CreateTask />
				<Tasklist />
			</div>
		);
	}
}

export default App;
