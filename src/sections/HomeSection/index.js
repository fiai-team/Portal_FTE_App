/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import React from "react";
import {withStyles, withWidth,} from "@material-ui/core";
import styles from "./styles";
import NewsSection from "../NewsSection";

class HomeSection extends React.Component {

    render() {
        const {classes} = this.props;
        return (

            <React.Fragment>

                <NewsSection/>

            </React.Fragment>
        );
    }
}

export default withWidth()(withStyles(styles)(HomeSection));

