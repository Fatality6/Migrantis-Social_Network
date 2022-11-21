import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/state';
import App from './App';

let rerender = (state) => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<App 
				state={state} 
				addPost={store.addPost.bind(store)} 
				updateNewPostText={store.updateNewPostText.bind(store)} 
				addMessage={store.addMessage.bind(store)}
			/>
		</React.StrictMode>);

};

rerender(store.getState());

store.subscribe(rerender);
