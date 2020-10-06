/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import React from "react";
import {
    List,
    ListItem,
    Avatar,
    ListItemAvatar,
    withStyles,
    GridListTile,
    Typography,
    withWidth
} from "@material-ui/core";
import cn from "classnames";
import ServerManager from "../../apis/server/index";
import styles from "./styles";
import GridList from "@material-ui/core/GridList";
import CustomTitle from "../../components/CustomTitle";

class HomeRoute extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            structure: []
        };
    }

    render() {
        const {classes, width,} = this.props;
        const {structure} = this.state;
        return (
            <div>

                <CustomTitle text="Consejo de Dirección"/>
                <br/>

                {
                    (width === "xs") ? (
                            <List>
                                {
                                    structure.map(item => (
                                        <ListItem style={{flexDirection: "column", paddingBottom:"2em"}}>
                                            <ListItemAvatar>
                                                <Avatar src={item.photo} className={classes.avatarBrand}/>
                                            </ListItemAvatar>
                                            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                                <Typography className={cn(classes.typography, classes.nameTypography)}>
                                                    {item.name}
                                                </Typography>
                                                <Typography>
                                                    {item.username}
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
                                        <GridListTile cols={1} style={{padding: "12px 5px", marginBottom:"3em"}}>
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
                                                <p>
                                                    {item.username}
                                                </p>
                                            </div>
                                        </GridListTile>
                                    ))
                                }
                            </GridList>
                        )
                }

            </div>
        );
    }

    componentDidMount() {
        ServerManager.getCouncilDirectionMembers()
            .then(response => {
                this.setState({structure: response.data});
            });
    }
}

export default withWidth()(withStyles(styles, {withTheme: true})(HomeRoute));


