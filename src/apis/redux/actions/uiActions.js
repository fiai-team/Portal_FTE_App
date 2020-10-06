/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
const SHOW_LOGIN_DIALOG_ACTION = "SHOW_LOGIN_DIALOG_ACTION";
const CLOSE_LOGIN_DIALOG_ACTION = "CLOSE_LOGIN_DIALOG_ACTION";

export {
    SHOW_LOGIN_DIALOG_ACTION,
    CLOSE_LOGIN_DIALOG_ACTION,
    showLoginDialogAction,
    closeLoginDialogAction
};

const showLoginDialogAction = () => ({type: SHOW_LOGIN_DIALOG_ACTION});

const closeLoginDialogAction = () => ({type: CLOSE_LOGIN_DIALOG_ACTION});
