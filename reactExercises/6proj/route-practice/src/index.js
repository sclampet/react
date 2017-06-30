import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import One from './routes/One';
import Two from './routes/Two';
import Three from './routes/Three';
import Four from './routes/Four';
import Fourpointone from './routes/Fourpointone'
import NoMatch from './routes/NoMatch';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

const browserHistory = createBrowserHistory();

ReactDOM.render(
	<Router history={browserHistory}>
		<div>
			<Route exact path='/' component={App}></Route>
			<Route path='/One' component={One}></Route>
			<Route path='/Two' component={Two}></Route>
			<Route path='/Three' component={Three}></Route>
			<Route path='/Four' component={Four}>
				<Route path='/Four/:id' component={Fourpointone} />
			</Route>
		</div>

	</Router>




	, 
	document.getElementById('root'));
registerServiceWorker();
