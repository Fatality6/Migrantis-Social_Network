import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/reduxStore';
import App from './App';
import { Provider } from 'react-redux';

let rerender = () => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<Provider store={store} >
			<App store={store} />
			</Provider>
		</React.StrictMode>);

};

rerender(store.getState());

store.subscribe(()=>{
	let state = store.getState();
	rerender(state);
});
