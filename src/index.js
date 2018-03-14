import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';
unregister();

ReactDOM.render(<App />, document.getElementById('root'));
// "Gotham Rounded A", "Gotham Rounded B", "Gotham Rounded", "Helvetica Neue", Helvetica, Arial, sans-serif
