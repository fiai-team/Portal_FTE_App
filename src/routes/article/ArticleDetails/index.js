import React from "react";
import {Typography, CircularProgress, withStyles} from "@material-ui/core";
import queryString from "query-string";
import ServerManager from "../../../apis/server";
import styles from "./styles";

class PostDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    render() {
        const {classes} = this.props;
        const {data} = this.state;
        return (
            <div style={{padding: 5, margin: 10, marginTop: 0}}>
                {
                    (this.state.data) ? (
                            <React.Fragment>
                                <Typography variant='h5' color='primary'>
                                    {data.title}
                                </Typography>
                                <Typography style={{opacity: .7}}>
                                    Por: {data.author.name + " " + data.author.lastName}
                                </Typography>
                                <Typography style={{opacity: .7}}>
                                   {data.date} ({data.relativeDate})
                                </Typography>

                                <div dangerouslySetInnerHTML={{ __html: data.body }} />
                            </React.Fragment>
                    )
                        : (
                            <div className={classes.loadingContent}>
                                <CircularProgress/>
                            </div>
                        )
                }
            </div>
        );
    }

    componentDidMount() {
        const UrlQueryStrings = this.props.location.search;
        const queryValues = queryString.parse(UrlQueryStrings);
        if (queryValues && queryValues.id) {
            ServerManager.getPostById(queryValues.id)
                .then(response => {
                    this.setState({data: response.data});
                });
        }
    }

}

export default withStyles(styles)(PostDetails);