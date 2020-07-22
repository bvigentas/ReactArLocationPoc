import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

setTimeout(ReactDOM.render(<App />, document.getElementById('root')), 1500);

serviceWorker.unregister();
