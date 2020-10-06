import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import {
    Link, Card, CardContent, CardMedia, Chip, ButtonBase, Typography, Menu, MenuItem, withStyles
} from "@material-ui/core";
import styles from "./styles";

class NewItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isContextMenuOpen: false,
            top: 0,
            left: 0,
        };

        this.initializeCallbacks();
    }

    initializeCallbacks() {
        this.showContextMenu = this.showContextMenu.bind(this);
        this.closeContextMenu = this.closeContextMenu.bind(this);
        this.goToTag = this.goToTag.bind(this);
        this.show = this.show.bind(this);
        this.goToAuthor = this.goToAuthor.bind(this);
    }

    renderTags(item) {
        const {tags} = item;
        const {classes} = this.props;
        if (!tags || tags.length === 0)
            return;
        return (
            <div className={classes.tagsChips}>
                {tags.map(item => (
                    <Chip key={item.id} onClick={this.goToTag.bind(this, item.id)}
                          size='small' label={item.title} color="primary" className={classes.topicsChip}/>
                ))}
            </div>
        );
    }
    render() {
        const {classes, data} = this.props;
        return (
            <Card className={classes.card}
                onContextMenu={this.showContextMenu}
                onClick={this.show}>
                <Menu open={this.state.isContextMenuOpen}
                      onBackdropClick={this.closeContextMenu}
                      onClose={this.closeContextMenu}
                      anchorReference="anchorPosition"
                      anchorPosition={
                          this.state.mouseY !== null && this.state.mouseX !== null
                              ? { top: this.state.mouseY, left: this.state.mouseX }
                              : undefined
                      }>
                    <MenuItem >Copiar</MenuItem>
                    <MenuItem>Compartir</MenuItem>
                    <MenuItem>Leer Más</MenuItem>
                </Menu>
                <ButtonBase className={classes.cardButton} >
                    <CardContent className={classes.content}>
                        <Typography variant="h5" color="primary" className={classes.title}>
                            {data.title}
                        </Typography>
                        <div className={classes.details}>
                            <Typography color="inherit" className={cn(classes.detailsAuthor, classes.detailsItem)}>
                                Por <Link onClick={this.goToAuthor}>{data.author.name}</Link>
                            </Typography>
                            <span />
                            <Typography color="inherit" className={cn(classes.detailsDate, classes.detailsItem)}>
                                {data.date}
                            </Typography>
                        </div>
                        {this.renderTags(data)}
                        <Typography className={classes.body}>
                            {data.preview}
                        </Typography>
                    </CardContent>
                    <CardMedia className={classes.cover}
                               image={data.photo} loading="lazy"/>
                </ButtonBase>
            </Card>
        );
    }
    goToAuthor(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    goToTag(id, e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.history.replace(`/tag?id=${id}`);
    }
    show(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.history.replace(`/article?id=${this.props.data.id}`);
    }
    showContextMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({isContextMenuOpen: true, mouseX: e.clientX - 2, mouseY: e.clientY - 4,});
    }
    closeContextMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({isContextMenuOpen: false});
    }
}

NewItem.propTypes = {
    data: PropTypes.object
};

export default withStyles(styles)(NewItem);
