import React from "react";
import {Typography} from "@material-ui/core";
import propTypes from "prop-types";

class RouteTitle extends React.Component {
    render() {
        return (
            <Typography variant="h4" color="primary" align="center" style={{padding: "10px"}}>
                {this.props.title}
            </Typography>
        );
    }
}

RouteTitle.propTypes = {
    title: propTypes.string.isRequired,
};

export default RouteTitle;