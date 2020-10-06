import React from "react";
import {
    withStyles,
    withWidth,
} from "@material-ui/core";
import styles from "./styles";
import {Parallax} from "../components";
import Header from "../components/Header";
import LeftHeaderLinks from "../components/Header/LeftHeaderLinks";
import RightHeaderLinks from "../components/Header/RightHeaderLinks";
import * as axios from "axios";

class HomePage extends React.Component {

    render() {
        const {classes, pageProps} = this.props;
        console.log(pageProps.slideItems)
        return (
            <div className={classes.root}>
                <Header leftLinks={<LeftHeaderLinks/>}
                        rightLinks={<RightHeaderLinks/>}
                        fixed
                        isHome={true}
                        changeColorOnScroll={{
                            height: 300,
                            color: "white"
                        }}/>

                <Parallax show={true} items={pageProps.slideItems}>

                </Parallax>
            </div>
        );
    }
}

export async function getStaticProps() {
    const res = await axios.get('http://localhost:8080/media/slide');
    const slideItems = res.data;
    return {
        props: {
            slideItems
        }
    }
}

export default withWidth()(withStyles(styles)(HomePage));

