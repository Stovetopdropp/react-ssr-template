import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'
import { rootSaga } from '../common/sagas/sagas'

import App from '../common/containers/App'

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);
const rootElement = document.getElementById('app');

store.runSaga(rootSaga);

const action = type => store.dispatch({type})

hydrate(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
)
