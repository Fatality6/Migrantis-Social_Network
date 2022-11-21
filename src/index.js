import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewPostText} from './redux/state';

let rerender = (state) => {
	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<App 
				state={state} 
				addPost={addPost} 
				updateNewPostText={updateNewPostText} 
				addMessage={addMessage}
			/>
		</React.StrictMode>);

};

rerender(state);

subscribe(rerender);
