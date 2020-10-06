/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    card: {
        display: "flex",
        margin: "7px",
        padding: "10px",
        border: "1px solid #dadce0"
    },
    details: {
        display: "flex",
    },
    detailsItem: {
        display: "inherit",
        padding: "5px",
        fontSize: "0.8rem",
    },
    content: {
        padding: 0,
        "&:last-child": {
            paddingBottom: 0
        }
    },
    title: {
        fontSize: "1rem",
        [theme.breakpoints.down("md")]: {
            fontSize: "18px",
        },

    },
    body: {
        opacity: ".8",
        fontSize: ".75rem",
        [theme.breakpoints.down("md")]: {
            fontSize: "13px",
        }
    },
    cover: {
        width: 330,
        height: 140,
        objectFit: "cover",
        borderRadius: "15px"
    },
    /*root: {
        marginTop: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
        margin: 10
    },*/
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
    topicsChip: {
        opacity: ".7",
        "&:hover": {
            opacity: "1"
        }
    },
    gridListTileBar: {
        height: "100%",
        opacity: 0,
        "&:hover": {
            opacity: 1,
        }
    },
});

export default styles;
