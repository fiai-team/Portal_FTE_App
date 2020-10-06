/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import {SET_POSTS_LIST_ACTION} from "../actions/postsActions";

const initialState = {
    posts: [],
};

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case SET_POSTS_LIST_ACTION:
            return {
                ...state,
                posts: action.data,
            };
        default:
            return state;
    }
}
