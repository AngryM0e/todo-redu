import React from 'react';
import CreateTask from './components/–°reateTask';
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
