import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import styles from './styles';

class Parallax extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            transform: ""
        };
        this.resetTransform = this.resetTransform.bind(this);
    }

    render() {
        const {classes, filter, className, children, style, image, small} = this.props;
        console.log(classes);
        const parallaxClasses = classNames(classes.parallax, {
            [classes.filter]: filter,
            [classes.small]: small,
            [className]: className !== undefined
        });
        return (
            <div className={parallaxClasses}
                 style={{
                     ...style,
                     backgroundImage: "url(" + image + ")",
                     transform: this.state.transform
                 }}>
                {children}
            </div>
        );
    }

    componentDidMount() {
        //this.setState({transform: "translate3d(0," + this.windowScrollTop() + "px,0"});

        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", this.resetTransform);
        }
    }

    componentWillUnmount() {
        if (window.innerWidth >= 768) {
            window.removeEventListener("scroll", this.resetTransform);
        }
    }

    windowScrollTop() {
        let windowScrollTop;
        if (window.innerWidth >= 768)
            windowScrollTop = window.pageYOffset / 3;
        else
            windowScrollTop = 0;
        return windowScrollTop;
    }

    resetTransform() {
        const windowScrollTop = window.pageYOffset / 3;
        this.setState({transform: "translate3d(0," + windowScrollTop + "px,0)"});
    }

}

export default withStyles(styles)(Parallax)

Parallax.propTypes = {
    className: PropTypes.string,
    filter: PropTypes.bool,
    children: PropTypes.node,
    style: PropTypes.string,
    image: PropTypes.string,
    small: PropTypes.bool
};
