/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
const styles = (theme) => ({
    container: {
        padding: "40px",
        [theme.breakpoints.down("sm")]: {
            padding: "10px"
        },
    },
    title: {
        fontSize: "2.125rem",
        fontWeight: 400,
        lineHeight: 1.17,
        letterSpacing: " 0.00735em",
        marginBottom: "10px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: "0.00938em",
        }
    },
    review: {
        padding: "10px 40px",
        textAlign: "justify",
        marginBottom: "10px",
        [theme.breakpoints.down("sm")]: {
            padding: "5px",
        },
    },
    descriptionContainer: {
        paddingLeft: "10px",
    },
    description: {
        bottom: 0,
        position: "absolute",
        color: "white",
        marginBottom: "7%",
    },
    main: {
        background: theme.palette.common.white,
        position: "relative",
        zIndex: "1000",
        padding: "10px"
    },
    mainRaised: {
        margin: "10px 10px 0",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    avatarBrand: {
        width: "110px",
        height: "110px",
        objectFit: "cover",
        marginLeft: "auto",
        marginRight: "auto",
    },
    typography: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.75,
        letterSpacing: "0.00938em",
        textAlign: "center"
    },
    nameTypography: {
        color: theme.palette.primary.main,
    }
});

export default styles;
