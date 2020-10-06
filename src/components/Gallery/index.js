/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
import React from "react";
import PropTypes from "prop-types";
import { ButtonBase, GridList, GridListTile, IconButton, Typography, withStyles, withWidth } from "@material-ui/core";
import {Linkedin} from "mdi-material-ui";
import styles from "./styles";
import ServerManager, {ServerPath} from "../../apis/server";

class GallerySection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    getColumnsCount() {
        const {width} = this.props;
        switch (width) {
            case "xs": return 1;
            case "sm": return 2;
            case "md": return 2;
            case "lg": return 4;
            case "xl": return 4;
        }
    }
    getGridListStyle() {
        if (this.getColumnsCount() === 1)
            return {
                display: "initial"
            };
        else return {
            display: "flex"
        };
    }

    render() {
        const {classes, show, width} = this.props;
        if (show)
            return (
                <div className={classes.root}>
                    <GridList cellHeight={210} style={this.getGridListStyle()} className={classes.gridList} cols={this.getColumnsCount()}>
                        {this.state.items.map(tile => (
                            <GridListTile key={tile.id} cols={1}>
                                <ButtonBase focusRipple
                                            key={tile.title}
                                            className={classes.image}
                                            focusVisibleClassName={classes.focusVisible}
                                            style={{width: "30%",}}>
                                    <img src={`${ServerPath}/media/photo/${tile.photoId}`} alt={tile.title}/>
                                    <span className={classes.imageBackdrop}/>
                                    <span className={classes.imageButton}>
                                       <Typography
                                           component="span"
                                           variant="subtitle1"
                                           color="inherit"
                                           className={classes.imageTitle}>{tile.title}
                                           <span className={classes.imageMarked}/>
                                       </Typography>

                                        <IconButton className={classes.likeButton} color='inherit'>
                                            <Linkedin/>
                                        </IconButton>
                                   </span>
                                </ButtonBase>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            );
        return null;
    }

    componentDidMount() {
        ServerManager.getGalleryEntries()
            .then(response => {
                if (response.status === 200) {
                    this.setState({items: response.data});
                }
            });
    }
}

GallerySection.propTypes = {
    show: PropTypes.bool
};

GallerySection.defaultProp = {
    show: true
};

export default withWidth()(withStyles(styles)(GallerySection));
