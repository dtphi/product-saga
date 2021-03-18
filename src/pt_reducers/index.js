import { combineReducers }    from 'redux';
import settings               from './config';
  
const rootReducer = combineReducers({
    settings,
});

const pt_reducers  = (state, action) => {
    if (action.type === 'REMOVE_REDUCER') {
        state = undefined;
    }
    return rootReducer(state, action);
};

export default pt_reducers;
