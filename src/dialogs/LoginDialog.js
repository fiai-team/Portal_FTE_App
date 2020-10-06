/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import React from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography, TextField,} from "@material-ui/core";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {closeLoginDialogAction} from "../apis/redux/actions/uiActions";

class LoginDialog extends React.Component {

    constructor(props) {
        super(props);

        this.closeLoginDialog = this.closeLoginDialog.bind(this);
    }

    render() {
        const {isOpenLoginDialog} = this.props;
        return (
            <Dialog open={isOpenLoginDialog}
                    onBackdropClick={this.closeLoginDialog}
                    disableBackdropClick={false}>
                <DialogTitle>
                    <Typography variant="h6" align="center" color="primary">
                        Autenticarse
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <TextField label="Usuario" fullWidth type="text"/>
                    <br/>
                    <br/>
                    <TextField label="Contraseña" fullWidth type="password"/>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" style={{padding: "5px", marginLeft: "auto", marginRight: "auto"}}>
                        Entrar
                    </Button>
                </DialogActions>
            </Dialog>
        );

    }

    closeLoginDialog(e) {
        this.props.actions.closeLoginDialogAction();
    }
}

const mapStateToProps = (state, props) => {
    const {uiReducer} = state;
    return {
        isOpenLoginDialog: uiReducer.isOpenLoginDialog
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ...ownProps,
        actions: bindActionCreators({closeLoginDialogAction}, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);

