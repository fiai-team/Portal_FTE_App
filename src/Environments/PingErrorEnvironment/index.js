import React from "react";
import {Button, Typography, withStyles} from "@material-ui/core";
import styles from "./styles";
import ConnectionError from "../../components/ConnectionError";

class PingErrorEnvironment extends React.Component {

    constructor(props) {
        super(props);
        this.reload = this.reload.bind(this);
    }


    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.space}>
                    <ConnectionError/>

                    <Typography className={classes.header}>
                        Imposible conectarse
                    </Typography>
                    <Typography className={classes.message}>
                        No nos hemos podido comunicar con nuestros servidores
                    </Typography>

                    <Button onClick={this.reload} color='primary' variant='contained' disableElevation>
                        Reintentar
                    </Button>

                </div>
            </div>
        );
    }

    reload(e) {
        e.stopPropagation();
        if (navigator.onLine) {
            window["oo"]();
        }
    }
}

export default withStyles(styles)(PingErrorEnvironment);