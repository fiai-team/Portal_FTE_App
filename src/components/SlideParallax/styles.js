/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
const parallaxStyle = {
    parallax: {
        height: "70vh",
        maxHeight: "1000px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        alignItems: "center"
    },
    filter: {
        "&:before": {
            background: "rgba(0, 0, 0, 0.5)"
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''"
        }
    },
    small: {
        height: "380px"
    },
    carouselImg: {
        height: "90vh",
        width: "100%",
        display: "block",
        margin: "0",
        padding: "0",
        border: "0",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        objectFit: "cover",
    },
    carouselDescription: {
        position: "absolute",
        bottom: "10px",
        color: "white",
        fontFamily: "cursive",
        marginLeft: "10px"
    }
};

export default parallaxStyle;
