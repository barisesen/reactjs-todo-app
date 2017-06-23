import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const data = [
      {
        "text": "Create simple vue app",
        "isCompleted": true
      },
      {
        "text": "Use localstorage",
        "isCompleted": false
      },
      {
        "text": "Connect Sockets",
        "isCompleted": false
      },
      {
        "text": "add images",
        "isCompleted": false
      }
    ];

ReactDOM.render(<App data={data} />, document.getElementById('root'));
registerServiceWorker();
