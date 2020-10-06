import React from "react";
import AliceCarousel from 'react-alice-carousel';
import classNames from "classnames";
import propTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import styles from "./styles";
import ServerManager from "../../apis/server";

class Parallax extends React.Component {

    constructor(props) {
        super(props);
console.log(props.items)
        this.state = {
            transform: "",
            index: 0,
            slideItems: props.items
        };
        this.resetTransform = this.resetTransform.bind(this);
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
    }

    renderItems() {
        const {classes} = this.props;
        const {slideItems} = this.state;
        return slideItems.map((item, position) => (
            <img key={position} className={classes.carouselImg}
                 src={item.imageUrl}>
            </img>
        ))

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
            <div className={parallaxClasses}
                 style={{...style, transform: this.state.transform, display: this.props.show ? "block" : "none"}}>
                <AliceCarousel items={this.renderItems()} buttonsDisabled infinite autoPlay
                               duration={5000} fadeOutAnimation autoPlayInterval={3000} stopAutoPlayOnHover={false}>

                </AliceCarousel>
                {children}
            </div>
        );
    }

    componentDidMount() {
        this.setState({transform: "translate3d(0," + this.windowScrollTop() + "px,0"});

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
