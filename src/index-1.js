import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppList from './App-1';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  
    <AppList/>,
  
  document.getElementById('root')
);


serviceWorker.unregister();
