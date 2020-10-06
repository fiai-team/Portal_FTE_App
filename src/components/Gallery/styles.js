/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
const styles = theme => ({
    root: {
        marginTop: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
        margin: 10
    },
    gridList: {
        transform: "translateZ(0)"
    },
    gridListTileBar: {
        height: "100%",
        opacity: 0,
        "&:hover": {
            opacity: 1,
        }
    },
    image: {
        position: "initial",
        display: "block",
        [theme.breakpoints.down("xs")]: {
            width: "100% !important",
        },
        "&:hover, &$focusVisible": {
            zIndex: 1,
            "& $tile": {
                transformation: "scale(1.2)",
            },
            "& $imageBackdrop": {
                opacity: 0.15,
            },
            "& $imageMarked": {
                opacity: 0,
            },
            "& $imageTitle": {
                border: "4px solid currentColor",
            },
            /*'& $likeButton': {
                opacity: 1,
            }*/
        },

    },
    likeButton: {
        bottom: 0,
        position: "absolute",
        opacity: 0,
        transition: theme.transitions.create("opacity")
    },
    focusVisible: {},
    imageButton: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column",
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
    },
    imageBackdrop: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create("opacity"),
    },
    imageTitle: {
        position: "relative",
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: "absolute",
        bottom: -2,
        left: "calc(50% - 9px)",
        transition: theme.transitions.create("opacity"),
    },
});

export default styles;
