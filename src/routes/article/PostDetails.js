import React from "react";
import {Typography} from "@material-ui/core"
import queryString from "query-string";
import ServerManager from "../../apis/server";

class PostDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                {
                    (this.state.data) ? (
                            <React.Fragment>
                                <Typography>
                                    {data.title}
                                </Typography>

                                <div dangerouslySetInnerHTML={{ __html: data.body }} />
                            </React.Fragment>
                    )
                        : (
                            <div>:(</div>
                        )
                }
            </div>
        )
    }

    componentDidMount() {
        const UrlQueryStrings = this.props.location.search;
        const queryValues = queryString.parse(UrlQueryStrings);
        if (queryValues && queryValues.id) {
            ServerManager.getPostById(queryValues.id)
                .then(response => {
                    this.setState({data: response.data});
                })
        }
    }

}

export default PostDetails;