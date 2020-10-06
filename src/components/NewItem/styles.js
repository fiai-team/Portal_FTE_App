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
        },
        [theme.breakpoints.only('xs')]: {
            margin: "2px",
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
        fontSize: "16px",
        textAlign: "start",
        [theme.breakpoints.down("md")]: {
            fontSize: "13px",
        },
    },
    details: {
        display: "flex",
        "-webkit-box-align": "center",
        boxAlign: "center",
        "-webkit-align-items": "center",
        alignItems: "center",
        "-webkit-flex-wrap": "wrap",
        flexWrap: "wrap",
        fontSize: "14px",
        color: "inherit",
        verticalAlign: "middle",
        whiteSpace: "nowrap",
        [theme.breakpoints.down("md")]: {
            fontSize: "12px",
        },
    },
    detailsItem: {
        fontSize: "inherit",
        [theme.breakpoints.down("md")]: {
            fontSize: "12px",
        },
        color: "inherit",
        opacity: .7,
    },
    detailsAuthor: {
        marginRight: "5px",
    },
    detailsDate: {
        "&::before": {
            fontSize: ".5625rem",
            content: "\"\\0000a0\\002022\\0000a0\"",
            marginRight: ".25rem",
        }
    },
    topicsChip: {
        opacity: ".7",
        "&:hover": {
            opacity: "1"
        },
        marginRight: '4px'
    },
    body: {
        textAlign: "initial",
        opacity: ".8",
        marginTop: 5,
        marginBottom: 5,
        fontSize: "15px",
        [theme.breakpoints.only("xs")]: {
            display: "none"
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "13px",
        }
    },
    cover: {
        minWidth: 140,
        width: 140,
        height: 140,
        objectFit: "cover",
        borderRadius: "15px",
        right:0,
        [theme.breakpoints.down("sm")]: {
            width: 90,
            height: 90,
            minWidth: 90,
        }
    },
    tagsChips: {
        display: "flex",
        marginTop: 5,
        [theme.breakpoints.only("xs")]: {
            bottom: 10,
            position: "absolute"
        },
    },
});

export default styles;
