import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure the path is correct
import './App.css';
import Homepage from './Homepage'; 
import './Homepage.css';
import './About.css';
import './Projects.css';
import AppRouter from './App';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

