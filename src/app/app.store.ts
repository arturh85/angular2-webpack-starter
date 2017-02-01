import { ActionReducer, combineReducers } from '@ngrx/store';

interface State {
    foo: number
}

const reducers = {
    foo: (state, action) => (state || 123)
};

let usedReducer: ActionReducer<State>;
usedReducer = combineReducers(reducers);
export default usedReducer;
