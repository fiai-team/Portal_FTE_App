import React from "react";
import App  from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from "@material-ui/styles";
import {CssBaseline} from "@material-ui/core";
import {wrapper} from '../apis/redux'
import theme from "../theme";
import {withRouter} from "next/router";

class Application extends App {

    render() {
        const {Component, ...restProps} = this.props;
        return (
            <>
                <Head>
                    <meta charSet="utf-8"/>
                    <title>Facultad de Tecnologías Educativas</title>
                    <meta name="viewport"
                          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
                    <meta name="theme-color" content={theme.palette.primary.main}/>
                    <link rel="stylesheet" href="/assets/styles/styles.css"/>
                    <link rel="stylesheet" href="/assets/styles/pace.css"/>
                    <link rel="stylesheet" href="/assets/styles/carousel.css"/>

                    <script src="/assets/scripts/pace.js">
                    </script>

                </Head>
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    <Component {...restProps}/>

                </ThemeProvider>
            </>
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