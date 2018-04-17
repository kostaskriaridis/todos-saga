import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Todos from './containers/todos';
import configureStore from './store/configure-store';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Todos />
    </Provider>,
    document.getElementById('root')
);
