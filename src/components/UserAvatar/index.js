/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */

import React from "react";
import {Typography, withStyles} from "@material-ui/core";
import styles from "./styles";

class UserAvatar extends React.Component {

    constructor(props) {
        super(props);

        const letters = props.name
            .split(" ")
            .map(word => word[0])
            .join("");

        this.state = {
            letters: letters,
        };
    }

    render() {
        const {classes, theme, color} = this.props;
        return (
            <div className={classes.avatar}
                 style={{backgroundColor: theme.palette[color].main}}>
                <Typography className={classes.text}>{this.state.letters}</Typography>
            </div>
        );
    }
}


export default withStyles(styles, {withTheme: true})(UserAvatar);
