/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */

import React from "react";
import styles from "./styles"
import {Card, CardContent, Typography, withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import ServerManager from "../../apis/server";

class EventSection extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            items: []
        }
    }


    render() {
        const {classes} = this.props
        return (
            <div style={{marginLeft:"4em"}}>
                {
                    this.state.items.map((event) => {
                        return (
                            <Card className={classes.root}>
                                <div>
                                    <Typography variant="h5"
                                                color="primary"
                                                align="center"
                                                className={classes.data}>
                                        {event.data}
                                    </Typography>
                                </div>
                                <CardContent className={classes.body}>
                                    <Link to="/">
                                        <Typography className={classes.title}
                                                    variant="h6">
                                            {event.title}
                                        </Typography>
                                    </Link>
                                    <p className={classes.text}>
                                        {event.text}
                                    </p>
                                    <img src={event.photo}
                                         className={classes.photo}/>
                                </CardContent>
                            </Card>
                        );
                    })
                }
            </div>
        );
    }

    componentDidMount() {
        ServerManager.getExtensionEvents()
            .then(response => {
                this.setState({items: response.data})
            })
    }
}

export default withStyles(styles)(EventSection);
