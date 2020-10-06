import React from "react";
import classNames from "classnames";
import {Avatar, Grid, Typography, withStyles} from "@material-ui/core";
import styles from "./styles";
import Parallax from "../../components/Parallax";

const backgroundImg = "/assets/img/background.jpg";
const nodejs = "/assets/img/brands/nodejs.png";
const nextjs = "/assets/img/brands/nextjs.png";
const react = "/assets/img/brands/react.jpg";
const mysql = "/assets/img/brands/mysql.png";

class Splash extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <div>

                <Parallax image={backgroundImg}/>

                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>

                        <Typography align="center" color="primary" variant="h5">
                            Facultad de Tecnologías Educativas
                        </Typography>
                        <br/>
                        <Typography color="primary" variant="subtitle1"
                                    style={{marginLeft: '5%',marginRight: '5%'}}>
                            Aquí se desarrolla el Portal Institucional de la Facultad de Tecnologías Educativas.
                            Un esfuerzo conjunto de estudiantes miembros de la FIAI para lograr un portal institucional
                            moderno, intuitivo, útil, y con un gran atractivo visual.
                            <br/>
                            Siéntete libre de contactarnos si deseas colaborar con su desarrollo.
                        </Typography>

                        <br/>
                            <Typography align="center" color="primary" variant="h5">
                                Tecnologías empleadas
                            </Typography>

                        <Grid container justify="center">
                            <Grid item xs={12} sm={4} md={3} alignItems="center" alignContent="space-around">
                                <Avatar src={nodejs} className={classes.avatarBrand}
                                        imgProps={{style: {objectFit: "scale-down"}}}>

                                </Avatar>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} alignItems="center" alignContent="space-around">
                                <Avatar src={nextjs} className={classes.avatarBrand}
                                        imgProps={{style: {objectFit: "scale-down", transform: 'scale(0.9)'}}}>

                                </Avatar>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} alignItems="center" alignContent="space-around">
                                <Avatar src={react} className={classes.avatarBrand}
                                        imgProps={{style: {objectFit: "scale-down"}}}>

                                </Avatar>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} alignItems="center" alignContent="center">
                                <Avatar src={mysql} className={classes.avatarBrand}
                                        imgProps={{style: {objectFit: "scale-down"}}}>

                                </Avatar>
                            </Grid>
                        </Grid>
                    </div>

                </div>

            </div>
        );
    }
}

export default withStyles(styles)(Splash);