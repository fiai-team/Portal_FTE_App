/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import React from "react";
import {
    Avatar,
    GridListTile,
    List,
    ListItem,
    ListItemAvatar, Paper,
    Typography,
    withStyles,
    withWidth
} from "@material-ui/core";
import cn from "classnames";
import GridList from "@material-ui/core/GridList";
import styles from "./styles";
import axios from "axios";

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            structure: []
        };
    }

    render() {

        const {classes, width, ...rest} = this.props;
        const {structure} = this.state;

        return (
            <Paper elevation={1} style={{padding: 5, margin: 10, marginTop: 0, paddingBottom: 20}}>
                <div className={classes.container}>
                    <Typography className={classes.title} color="primary" align="center">
                        Portal de la Facultad de Tecnologías Educativas
                    </Typography>

                    <Typography className={classes.review}>
                        Portal institucional desarrollado por estudiantes de la Facultad de Tecnologías Educativas,
                        con la colaboración de algunos estudiantes de otras facultades. Bajo el principio: Aprendiendo
                        Creando,
                        este proyecto surge como el resultado de un curso de Desarrollo Web con ReactJS. A todo
                        nuestro <b>TEAM </b>
                        un eterno agradecimiento.
                    </Typography>

                    {
                        (width === "xs") ? (
                                <List>
                                    {
                                        structure.map(item => (
                                            <ListItem style={{flexDirection: "column"}}>
                                                <ListItemAvatar>
                                                    <Avatar src={item.photo} className={classes.avatarBrand}/>
                                                </ListItemAvatar>
                                                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                                    <Typography className={cn(classes.typography, classes.nameTypography)}>
                                                        {item.name}
                                                    </Typography>
                                                    <Typography className={classes.typography}>
                                                        {item.position}
                                                    </Typography>
                                                </div>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            )
                            :
                            (
                                <GridList cols={2}>
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
                            )
                    }

                </div>
            </Paper>
        );
    }

    componentDidMount() {
        axios.get("http://fte.uci.cu/api/credits_team", {}).then(response => {
            this.setState({structure: response.data});
        });
    }

}

export default withWidth()(withStyles(styles)(Index));
