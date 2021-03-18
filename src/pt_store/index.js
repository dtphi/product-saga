import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import pt_reducers from '../pt_reducers';
import RootSaga from "../pt_sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export function configStore(initialState) {
    const preloadedState = (process.env.NODE_ENV === 'production') ? 
            initialState : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    const store = createStore(
        pt_reducers,
        preloadedState,
        compose(applyMiddleware(...middlewares))
    );

    sagaMiddleware.run(RootSaga);

    return store;
}
