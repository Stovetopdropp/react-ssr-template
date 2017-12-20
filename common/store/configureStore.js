import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'

const configureStore = (preloadedState) => {
    const sagaMiddleware = createSagaMiddleware()

    const createStoreWithMiddleware = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(sagaMiddleware)
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        })
    }

    return Object.assign({}, createStoreWithMiddleware, { runSaga: sagaMiddleware.run });
}

export default configureStore
