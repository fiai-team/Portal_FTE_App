import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {IconButton, List, ListItem, withStyles, Tooltip} from "@material-ui/core";
import {Person as PersonIcon} from "@material-ui/icons";
import {headerLinksStyles as styles} from "./styles";
import {showLoginDialogAction} from "../../apis/redux/actions/uiActions";

class RightHeaderLinks extends React.Component {

    constructor(props) {
        super(props);

        this.showLoginDialog = this.showLoginDialog.bind(this);
    }

    render() {
        const {classes} = this.props;
        return <div/>;
        return (
            <List className={classes.list}>
                <ListItem className={classes.listItem} onClick={this.showLoginDialog}>
                    <Tooltip title="Acceder"
                             placement={window.innerWidth > 959 ? "top" : "bottom"}
                             classes={{tooltip: classes.tooltip}}>
                        <IconButton color="inherit"
                                    className={classes.navLink}>
                            <PersonIcon color="inherit"/>
                        </IconButton>
                    </Tooltip>
                </ListItem>
            </List>
        );
    }

    showLoginDialog(e) {
        this.props.actions.showLoginDialogAction();
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ...ownProps,
        actions: bindActionCreators({showLoginDialogAction}, dispatch)
    };
};

const ConnectedHeaderLinks = connect(null, mapDispatchToProps)(RightHeaderLinks);

export default withStyles(styles)(ConnectedHeaderLinks);
