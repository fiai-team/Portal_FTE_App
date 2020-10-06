/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */

import React from "react";
import {Typography, withStyles } from "@material-ui/core";
import styles from "./styles";
import CustomTitle from "../../components/CustomTitle";

class FacultyMission extends React.Component{
    render() {
        const {classes}=this.props;
        return (
            <div>
                <div className={classes.root}>
                    <CustomTitle text="Misión"/>
                    <Typography align="justify" className={classes.text}>
                        Formar profesionales comprometidos con su Patria y altamente calificados en la rama de la Informática,
                        producir aplicaciones y servicios informáticos a partir del vínculo estudio – trabajo como modelo de
                        formación – investigación - producción, sirviendo de soporte a la industria cubana de la Informática.
                    </Typography>
                </div>
                <div className={classes.root}>
                    <CustomTitle text="Visión"/>
                    <Typography align="justify" className={classes.text}>
                        Formar profesionales comprometidos con su Patria y altamente calificados en la rama de la Informática,
                        producir aplicaciones y servicios informáticos a partir del vínculo estudio – trabajo como modelo de
                        formación – investigación - producción, sirviendo de soporte a la industria cubana de la Informática.
                    </Typography>
                </div>
                <div className={classes.root}>
                    <CustomTitle text="Objetivo"/>
                    <Typography align="justify" className={classes.text}>
                        Formar profesionales comprometidos con su Patria y altamente calificados en la rama de la Informática,
                        producir aplicaciones y servicios informáticos a partir del vínculo estudio – trabajo como modelo de
                        formación – investigación - producción, sirviendo de soporte a la industria cubana de la Informática.
                    </Typography>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(FacultyMission);
