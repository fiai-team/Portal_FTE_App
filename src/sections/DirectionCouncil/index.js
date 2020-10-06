/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import React from "react";
import {Avatar,
    Paper,
    GridList,
    GridListTile,
    Typography,
    withWidth,
    withStyles
} from "@material-ui/core";
import cn from "classnames";
import styles from "./styles";
import ServerManager from "../../apis/server";
import RouteTitle from "../../components/RouteTitle";

class HomeRoute extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            structure: []
        };
    }

    render() {
        const {classes, width} = this.props;
        const {structure} = this.state;
        return (
            <Paper elevation={1} style={{padding: 5, margin: 10, marginTop: 0, paddingBottom: 20}}>
                <RouteTitle title='Consejo de Dirección'/>
                <br/>

                <GridList cols={(width === "xs") ? 1 : 2}>
                    {
                        structure.map(item => (
                            <GridListTile cols={1} style={{padding: "12px 5px"}}>
                                <Avatar src={item.photo} className={classes.avatarBrand}/>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}>
                                    <Typography className={cn(classes.typography, classes.nameTypography)}>
                                        {item.name}
                                    </Typography>
                                    <Typography className={classes.typography}>
                                        {item.position}
                                    </Typography>
                                </div>
                            </GridListTile>
                        ))
                    }
                </GridList>
            </Paper>
        );
    }

    componentDidMount() {
        ServerManager.getCouncilOfDirection()
            .then(response => {
                if (response.status === 200) {
                    this.setState({structure: response.data});
                }
            });
    }
}

export default withWidth()(withStyles(styles)(HomeRoute));


