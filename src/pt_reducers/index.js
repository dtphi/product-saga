import { combineReducers }    from 'redux';
import settings               from './config';
  
const rootReducer = combineReducers({
    settings,
});

const reducers  = (state, action) => {
    if (action.type === 'REMOVE_REDUCER') {
        state = undefined;
    }
    return rootReducer(state, action);
};

export default reducers;
