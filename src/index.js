import React from 'react';
import ReactDOM from 'react-dom';
import AllReducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './styles/style.scss';

import App from './App/App';


const store = createStore(AllReducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

window.store=store;