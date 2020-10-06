/*import React from "react";
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
import Link from "next/link";
import LeftHeaderLinks from './LeftHeaderLinks'
import RightHeaderLinks from './RightHeaderLinks'

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
            return this.state.iconWhite ? "/assets/img/fte_white_logo.png" : "/assets/img/fte_black_logo.png";
        return "/assets/img/fte_black_logo.png";
    }

    render() {
        const {rightLinks, leftLinks, brand, fixed, absolute, classes} = this.props;
        const {color} = this.state;
        const appBarClasses = cn({
            [classes.appBar]: true,
            [classes[color]]: color,
            [classes.absolute]: absolute,
            [classes.fixed]: fixed
        });
       /* return (
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Material-UI
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <MailIcon />
                                </Badge>
                            </IconButton>
                            <IconButton aria-label="show 17 new notifications" color="inherit">
                                <Badge badgeContent={17} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </div>
        );
    }

    menuId = 'primary-search-account-menu';
    renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    mobileMenuId = 'primary-search-account-menu-mobile';
    renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    /**
     *
     * <AppBar className={appBarClasses}>
     <Toolbar >
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

*/

    /*handleDrawerToggle(e) {
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
}*/
