/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import styles from "./styles";
import ServerManager from "../../apis/server";
import NewItem from "../../components/NewItem";

class NewsSection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    render() {
        return (
            <div >
                {
                    this.state.items.map((item) => (
                        <NewItem data={item} key={item.id}/>
                    ))
                }
            </div>
        );
    }

    componentDidMount() {
        ServerManager.getMostRecentPosts()
            .then(response => {
                if (response.status === 200)
                    this.setState({items: response.data});
            });
    }
}

NewsSection.propTypes = {
    className: PropTypes.any
};


export default (withStyles(styles)(NewsSection));
