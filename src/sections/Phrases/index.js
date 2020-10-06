/*
 * Copyright (c) 2020. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import React from "react";
import {Card, CardContent, Typography, withStyles, IconButton} from "@material-ui/core";
import ServerManager from "../../apis/server";
import styles from "./styles";
import {title} from "../../components/mainStyles";
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';


class Phrases extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            phrase: {
                text:"",
                author:"",
            }
        };
        this.getRandomPhrase= this.getRandomPhrase.bind(this);
    }


    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.aboutCard}>
                <CardContent className={classes.content}>
                    <Typography className={classes.text}
                                variant="h5">
                        {this.state.phrase.text}
                    </Typography>
                    <Typography className={classes.author}>
                        {this.state.phrase.author}
                    </Typography>
                </CardContent>
                <IconButton onClick={this.getRandomPhrase}>
                    <NavigateNextRoundedIcon/>
                </IconButton>
            </Card>
        );
    }

    getRandomPhrase(){
        ServerManager.getPhrase()
            .then(response => {
                this.setState({phrase: response.data})
            })


    }

    componentDidMount() {
        this.getRandomPhrase();
    }
}


export default withStyles(styles)(Phrases);
