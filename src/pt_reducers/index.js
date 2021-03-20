import { combineReducers }    from 'redux';
import configs               from './config';
  
const rootReducer = combineReducers({
    configs,
});

const reducers  = (state, action) => {
    if (action.type === 'REMOVE_REDUCER') {
        state = undefined;
    }
    return rootReducer(state, action);
};

export default reducers;
