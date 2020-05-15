import React from 'react';
import {render} from 'react-dom'
import App from './components/App/app.js'
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import './assets/scss/common.scss';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
const store = createStore(rootReducer,
/* preloadedState, */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'))
serviceWorker.unregister();
