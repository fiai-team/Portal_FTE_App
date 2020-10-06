/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

class CustomTitle extends React.Component{
    render() {
        return (
            <Typography variant="h4"
                        color="primary"
                        align="center"
                        style={{padding: "10px"}}>
                {this.props.text}
            </Typography>
        );
    }
}

CustomTitle.propsType = {
    text: PropTypes.string.isRequired
};

export default CustomTitle;