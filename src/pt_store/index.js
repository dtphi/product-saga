import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import reducers from '../pt_reducers';
import RootSaga from "../pt_sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export function configureStore(initialState) {
    const preloadedState = (process.env.NODE_ENV === 'production') ? 
            initialState : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    console.log('dev',preloadedState)
    const store = createStore(
        reducers,
        //preloadedState,
        composeEnhancer(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(RootSaga);

    return store;
}
