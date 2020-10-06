/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import React from "react";
import CustomTitle from "../../components/CustomTitle";
import {Card, CardContent, Typography, ButtonBase, withStyles} from "@material-ui/core";
import imagen from "../../../public/assets/img/articles/img1.jpg";
import styles from "./styles";

class ExtensionProjectSection extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            projects: [
                {
                    title: "Hola",
                    text:"Aplica una estrategia educativa encaminada a elevar la motivación, el desarrollo de " +
                        "habilidades para el estudio y el pensamiento lógico, a través de una atención diferenciada y" +
                        " el trabajo educativo, político e ideológico con los estudiantes de primer año."
                },
                {
                    title: "holahola"
                },
            ]
        }
    }

    render() {
        const {classes} = this.props;
        return(
            <div style={{display:"flex", flexDirection:"column"}}>
                <CustomTitle text="Proyectos Extencionistas"/>
                <div style={{marginBottom:"2em", paddingLeft:"2em", paddingRight:"2em"}}>
                    {
                        this.state.projects.map((project) => {
                            return (
                                <Card className={classes.root}>
                                    <ButtonBase className={classes.base}>
                                        <CardContent className={classes.body}>
                                            <Typography variant="h5"
                                                        align="left"
                                                        color="primary">
                                                {project.title}
                                            </Typography>
                                            <Typography className={classes.text}>
                                                {project.text}
                                            </Typography>
                                        </CardContent>
                                        <img src={imagen} className={classes.photo}/>
                                    </ButtonBase>
                                </Card>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.setState({

        })
    }

}

export default withStyles(styles)(ExtensionProjectSection);