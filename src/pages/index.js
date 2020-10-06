import React from "react";
import {
    withStyles,
    withWidth,
} from "@material-ui/core";
import styles from "./styles";
import NewsSection from "../sections/NewsSection";

class HomeSection extends React.Component {

    render() {
        return (
            <React.Fragment>
                <NewsSection/>
            </React.Fragment>
        );
    }
}

export default withWidth()(withStyles(styles)(HomeSection));

