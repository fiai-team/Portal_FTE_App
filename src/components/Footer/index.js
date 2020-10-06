/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import React from "react";
import propTypes from "prop-types";
import {Grid, Link, List, ListItem, ListItemText, withStyles} from "@material-ui/core";
import {Favorite as FavoriteIcon} from "@material-ui/icons";
import styles from "./styles";
import {
    NewspaperVariantMultiple as NewspaperIcon, TrendingUp as TrendIcon
} from "mdi-material-ui";
import ServerManager from "../../apis/server";

class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mostRead: []
        }
    }

    render() {
        const {classes} = this.props;
        const {mostRead} = this.state;

        return (
            <footer className={classes.footer}>
                <Grid container>
                    <Grid item xs={12} sm={4} md={4}>
                        <TrendIcon/>
                        <List subheader="Lo más leído">
                            {
                                mostRead.map(item => (
                                    <ListItem style={{cursor: 'pointer', fontSize: '0.9rem', padding: 5}}>
                                        {item.title}
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <NewspaperIcon/>
                        <List subheader="Lo más leido">

                        </List>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <NewspaperIcon/>
                        <List subheader="Lo más leido">

                        </List>
                    </Grid>
                </Grid>

                <div style={{marginTop: "10px", fontSize: "15px", fontWeight: "500"}}>
                    Hecho con{" "}
                    <FavoriteIcon className={classes.icon} /> por {" "}
                    <a target="_blank">
                        FIAI
                    </a>{" "}
                    por una mejor web.
                </div>

                <div style={{marginTop: "10px", fontSize: "15px", fontWeight: "500"}}>
                    Facultad de Tecnologías Educativas.
                    <Link href="http://www.uci.cu"
                          target="_blank"
                          rel="noopener"
                          color="inherit"
                          style={{ marginLeft: "4px", marginRight: "4px"}}>
                        Universidad de las Ciencias Informáticas (UCI).
                    </Link>
                    &copy; {new Date(Date.now()).getFullYear()}
                </div>

            </footer>
        );
    }

    componentDidMount() {
        ServerManager.getMostRead()
            .then(response => {
                if (response.status === 200) {
                    this.setState({mostRead: response.data});
                }
            })
    }
}

export default withStyles(styles, {withTheme: true})(Footer);

Footer.propTypes = {
    whiteFont: propTypes.bool
};
