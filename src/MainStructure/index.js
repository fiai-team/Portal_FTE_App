import React from "react";
import { withRouter } from "next/router";
import {
    Avatar, ButtonBase, Card, CardContent, Grid, Link, List, ListItem,
    ListItemAvatar, ListItemText, withStyles
} from "@material-ui/core";
import {Facebook as FacebookIcon, Information as InformationIcon, Twitter as TwitterIcon} from "mdi-material-ui";
import LoginDialog from "../dialogs/LoginDialog";


import {Footer, Parallax} from "../components";
import GallerySection from "../components/Gallery";
import ServerManager from "../apis/server";
import styles from "./styles";

class MainStructure extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            alerts: []
        };
    }

    isHomeRoute() {
        return this.props.router.pathname === "/";
    }

    renderAlerts() {
        const {alerts} = this.state;
        const {classes} = this.props;
        return alerts.map(item => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={item.id}>
                <Card className={classes.alertCard}>
                    <ButtonBase className={classes.alertButton}>
                        <Avatar className={classes.pinAvatar}>
                            <InformationIcon className={classes.alertIcon}/>
                        </Avatar>
                        <div className={classes.alertMessage}>{item.message}</div>
                    </ButtonBase>
                </Card>
            </Grid>
        ));
    }

    render() {
        const {classes, ...rest} = this.props;
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}>

                <LoginDialog/>



                <Parallax show={this.isHomeRoute()}/>

                <div style={{position: "relative", zIndex: "3", marginTop: "-30px",}}>

                    <Grid container style={{
                        paddingLeft: "8%",
                        paddingRight: "8%",
                        display: this.isHomeRoute() ? "flex" : "none"
                    }}>
                        {this.renderAlerts()}
                    </Grid>

                    {!this.isHomeRoute() && (<div className={classes.toolbarFix}/>)}

                    <Grid container>
                        <Grid item xs={12} md={9} style={{padding: 5}}>
                            {this.props.component}
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card className={classes.aboutCard}>
                                <CardContent className={classes.content}>
                                    <List className={classes.socialLinksList}>
                                        <ListItem button
                                                  component={Link}
                                                  href="https://www.facebook.com/FacTecEduUci/"
                                                  target="_blank"
                                                  rel="noopener">
                                            <ListItemAvatar>
                                                <FacebookIcon/>
                                            </ListItemAvatar>
                                            <ListItemText primary='Facebook'/>
                                        </ListItem>
                                        <ListItem button
                                                  component={Link}
                                                  href="https://www.twitter.com/Lobos_UCI"
                                                  target="_blank"
                                                  rel="noopener">
                                            <ListItemAvatar>
                                                <TwitterIcon/>
                                            </ListItemAvatar>
                                            <ListItemText primary='Twitter'/>
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <GallerySection show={this.isHomeRoute()}/>
                <Footer/>
            </div>
        );
    }

    componentDidMount() {
        ServerManager.getAlerts()
            .then(response => {
                this.setState({alerts: response.data});
            });
    }
}

export default withRouter(withStyles(styles)(MainStructure));
