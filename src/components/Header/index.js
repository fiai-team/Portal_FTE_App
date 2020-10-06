import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import {
    AppBar,
    Avatar,
    Drawer,
    Hidden,
    IconButton,
    withStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import styles from "./styles";
import LeftHeaderLinks from './LeftHeaderLinks'
import RightHeaderLinks from './RightHeaderLinks'
import Link from "next/link";

const fte_black_logo = "/assets/img/fte_black_logo.png";
const fte_white_logo = "/assets/img/fte_white_logo.png";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            mobileOpen: false,
            iconWhite: true,
            color: "white",
        };

        this.headerColorChange = this.headerColorChange.bind(this);
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    }

    componentDidMount() {
        if (this.props.isHome) {
            if (this.props.changeColorOnScroll) {
                window.addEventListener("scroll", this.headerColorChange);
                this.setState({color: "transparent"});
            }
        } else {
            this.setState({color: "white"});
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.isHome) {
            nextState.color = "transparent";
        } else if (!nextProps.isHome) {
            nextState.color = "white";
        }
        return true;
    }

    componentWillUnmount() {
        if (this.props.changeColorOnScroll) {
            window.removeEventListener("scroll", this.headerColorChange);
        }
    }

    getLogo() {
        if (this.props.isHome)
            return this.state.iconWhite ? fte_white_logo : fte_black_logo;
        return fte_black_logo;
    }

    render() {
        const {rightLinks, leftLinks, brand, fixed, absolute, classes} = this.props;

        return (
            <AppBar className={classes.appBar}  elevation={1} color="transparent"
                    position={fixed && "fixed"}>
                <Toolbar className={classes.container}>
                    {
                        leftLinks !== undefined ?
                            <span style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                <Link href="/">
                                    <Avatar id="avatar" className={classes.iconAvatar} src={this.getLogo()}/>
                                </Link>
                                <Typography className={classes.title}>{brand}</Typography>
                            </span>
                            : null
                    }
                    <div className={classes.flex}>
                        {
                            leftLinks !== undefined ? (
                                <Hidden smDown implementation="css">
                                    {leftLinks}
                                </Hidden>
                            ) : (
                                <span style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                    <Link href="/">
                                        <Avatar id="avatar" className={classes.iconAvatar} src={this.getLogo()}/>
                                    </Link>
                                    <Typography className={classes.title}>{brand}</Typography>
                                </span>
                            )}
                    </div>
                    <Hidden smDown implementation="css">
                        {rightLinks}
                    </Hidden>
                    <Hidden mdUp>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}>
                            <Menu/>
                        </IconButton>
                    </Hidden>
                </Toolbar>
                <Hidden mdUp implementation="js">
                    <Drawer
                        variant="temporary"
                        anchor="right"
                        open={this.state.mobileOpen}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        onClose={this.handleDrawerToggle}>
                        <div className={classes.appResponsive}>
                            {leftLinks}
                            {rightLinks}
                        </div>
                    </Drawer>
                </Hidden>
            </AppBar>
        );
    }

    handleDrawerToggle(e) {
        this.setState({mobileOpen: !this.state.mobileOpen});
    }

    setIconWhite(e) {
        this.setState({iconWhite: e});
    }

    headerColorChange() {
        const {color, changeColorOnScroll, classes} = this.props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
            document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
            this.setIconWhite(false);
        } else {
            document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
            document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
            this.setIconWhite(true);
        }
    }
}

Header.defaultProp = {
    color: "white",
    isHome: true,
    fixed: true,
};

Header.propTypes = {
    rightLinks: PropTypes.node,
    leftLinks: PropTypes.node,
    brand: PropTypes.string,
    fixed: PropTypes.bool,
    absolute: PropTypes.bool,
    changeColorOnScroll: PropTypes.shape({
        height: PropTypes.number.isRequired,
        color: PropTypes.oneOf([
            "primary",
            "info",
            "success",
            "warning",
            "danger",
            "transparent",
            "white",
            "rose",
            "dark"
        ]).isRequired
    }),
    isHome: PropTypes.bool,
};

export default withStyles(styles)(Header);

export {
    LeftHeaderLinks,
    RightHeaderLinks
}
