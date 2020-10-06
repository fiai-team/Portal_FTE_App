/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
const styles = theme => ({
    card: {
        display: "flex",
        margin: "7px",
        border: "1px solid #dadce0",
        boxShadow: theme.shadows[0],
        transitions: theme.transitions.create("box-shadow"),
        "&:hover": {
            boxShadow: theme.shadows[3]
        }
    },
    cardButton: {
        padding: 10,
        width: "-webkit-fill-available",
        alignItems: "initial"
    },
    content: {
        padding: 0,
        flexGrow: 1,
        "&:last-child": {
            paddingBottom: 0
        }
    },
    title: {
        fontSize: "1rem",
        textAlign: "start",
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
        },
    },
    details: {
        display: "flex",
        flexDirection: "row"
    },
    detailsItem: {
        display: "inherit",
        padding: "5px",
        fontSize: "0.8rem",
    },
    topicsChip: {
        opacity: ".7",
        "&:hover": {
            opacity: "1"
        }
    },
    body: {
        textAlign: "initial",
        opacity: ".8",
        marginTop: 5,
        marginBottom: 5,
        fontSize: "15px",
        [theme.breakpoints.down("md")]: {
            fontSize: "13px",
        }
    },
    cover: {
        minWidth: 140,
        width: 140,
        height: 140,
        objectFit: "cover",
        borderRadius: "15px"
    },

    tagsChips: {
        display: "flex"
    }
});

export default styles;
