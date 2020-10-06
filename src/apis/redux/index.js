import {createStore, combineReducers} from 'redux';
import {MakeStore, createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import uiReducer from "./reducers/uiReducer";
import postsReducer from "./reducers/postsReducer";

// create a makeStore function
const makeStore = (context) => createStore(combineReducers({uiReducer, postsReducer}));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});