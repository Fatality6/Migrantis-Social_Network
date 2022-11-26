import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/store';
import App from './App';

let rerender = (state) => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<App
				state={state}
				dispatch={store.dispatch.bind(store)}
			/>
		</React.StrictMode>);

};

rerender(store.getState());

store.subscribe(rerender);
