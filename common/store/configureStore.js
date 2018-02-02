import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reduxLogger from 'redux-logger';
import rootReducer from '../reducers'

const configureStore = (preloadedState, isServer=false) => {
    const sagaMiddleware = createSagaMiddleware()

    const createStoreWithMiddleware = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(sagaMiddleware, reduxLogger)
    )

    if (module.hot && !isServer) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        })
    }

    return Object.assign({}, createStoreWithMiddleware, { runSaga: sagaMiddleware.run });
}

export default configureStore
