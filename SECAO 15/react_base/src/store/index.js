import { persistStore } from 'redux-persist'
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import createSagaMiddlewere from 'redux-saga'

import persistedReducers from './modules/reduxPersist'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

const sagaMiddleware = createSagaMiddlewere();
const store = createStore(persistedReducers(rootReducer),
    applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)


export default store
export const persistor = persistStore(store)
