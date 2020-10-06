import React from "react";
import App, { Container } from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from "@material-ui/styles";
import {CssBaseline} from "@material-ui/core";
import {wrapper} from '../apis/redux'
import theme from "../theme";
import {withRouter} from "next/router";
import MainStructure from "../MainStructure";

class Application extends App {

    render() {
        const {Component} = this.props;
        return (
            <Container>
                <Head>
                    <title>Facultad de Tecnologías Educativas</title>
                    <link rel="stylesheet" href="/styles.css"/>
                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {
                        this.props.router.pathname === "/" ?
                            (
                                <MainStructure component={Component}/>
                            )
                            :
                            (
                                <div>
                                    <Component/>
                                </div>
                            )
                    }
                </ThemeProvider>
            </Container>
        );
    }

    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }


}

export default wrapper.withRedux(withRouter(Application));