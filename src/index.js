import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Loop, Stage } from 'react-game-kit';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
