import React from "react";
import classNames from "classnames";
import propTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import {autoPlay} from "react-swipeable-views-utils";
import styles from "./styles";
import ServerManager from "../../apis/server";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Parallax extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            transform: "",
            index: 0,
            slideItems: []
        };
        this.resetTransform = this.resetTransform.bind(this);
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
    }

    render() {
        const {filter, className, children, style, classes, small} = this.props;
        const parallaxClasses = classNames({
            [classes.parallax]: true,
            [classes.filter]: filter,
            [classes.small]: small,
            [className]: className !== undefined
        });
        const {slideItems} = this.state;
        return (
            <div
                className={parallaxClasses}
                style={{...style, transform: this.state.transform, display: this.props.show ? "block" : "none"}}>
                <AutoPlaySwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex} interval={3000}
                                        autoPlay >
                    {
                        slideItems.map((item, position) => (
                            <div key={position} className={classes.carouselImg}
                                 style={{backgroundImage: "url(" + item.imageUrl + ")"}}>
                            </div>
                        ))
                    }
                </AutoPlaySwipeableViews >
                {children}
            </div>
        );
    }

    componentDidMount() {
        this.setState({transform: "translate3d(0," + this.windowScrollTop() + "px,0"});

        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", this.resetTransform);
        }

        ServerManager.getSlideItems().then(response => {
            this.setState({slideItems: response.data});
        });
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

    handleChangeIndex(index) {
        this.setState({index: index});
    }
}

export default withStyles(styles)(Parallax);

Parallax.propTypes = {
    className: propTypes.string,
    filter: propTypes.bool,
    children: propTypes.node,
    style: propTypes.string,
    image: propTypes.string,
    small: propTypes.bool
};
