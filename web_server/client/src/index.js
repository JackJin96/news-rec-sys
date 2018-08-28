import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import LoginPage from './Login/LoginPage';

ReactDOM.render(<LoginPage />, document.getElementById('root'));
registerServiceWorker();
