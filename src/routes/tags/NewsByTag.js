/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import React from "react";
import PropTypes from "prop-types";
import {Chip,withStyles} from "@material-ui/core";
import styles from "./styles";
import ServerManager from "../../apis/server";
import NewItem from "../../components/NewItem";
import queryString from "query-string";
import {withRouter} from "react-router";

class NewsByTag extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    render() {
        const {classes} = this.props;
        return (
            <div style={{padding: 5, margin: 10, marginTop: 0}}>
                {
                    this.state.items.map(item => (
                        <NewItem data={item}/>
                    ))
                }
            </div>
        );
    }

    componentDidMount() {
        const UrlQueryStrings = this.props.location.search;
        const queryValues = queryString.parse(UrlQueryStrings);
        if (queryValues && queryValues.id) {
            ServerManager.getPostByTagId(queryValues.id)
                .then(response => {
                    this.setState({items: response.data});
                });
        }
    }
}

NewsByTag.propTypes = {
    className: PropTypes.any
};

export default withRouter(withStyles(styles)(NewsByTag));
