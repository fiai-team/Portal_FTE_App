/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import {CLOSE_LOGIN_DIALOG_ACTION, SHOW_LOGIN_DIALOG_ACTION} from "../actions/uiActions";

const initialState = {
    isOpenLoginDialog: false,
};

export default function uiReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_LOGIN_DIALOG_ACTION:
            return {
                ...state,
                isOpenLoginDialog: true,
            };
        case CLOSE_LOGIN_DIALOG_ACTION:
            return {
                ...state,
                isOpenLoginDialog: false,
            };
        default:
            return state;
    }
}
