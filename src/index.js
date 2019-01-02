import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import routes from './routes';
import Template from 'components/template/index.js';
import 'styles/master.scss';

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Template>
                {routes}
            </Template>
        </Router>
    </Provider>,
    document.getElementById('app')
);
