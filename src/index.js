import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postsData = [
  { id: '1', message: 'Hi world!', likes: 15 },
  { id: '2', message: 'how are you?', likes: 20 },
  { id: '3', message: 'Where are you?', likes: 17 }
]

const dialogsName = [
  { id: '1', name: 'Иван' },
  { id: '2', name: 'Андрей' },
  { id: '3', name: 'Олег' },
  { id: '4', name: 'Игорь' },
  { id: '5', name: 'Игорян' },
  { id: '6', name: 'Ксения' }
]

const dialogsItems = [
  { id: '1', message: 'Hi hi hi!' },
  { id: '2', message: 'how are you?' },
  { id: '3', message: 'Where are you?' }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsName={dialogsName} dialogsItems={dialogsItems}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
