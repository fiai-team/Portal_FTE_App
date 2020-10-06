/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
const styles = (theme) => ({
    root:{
        marginTop:"1em",
        marginBottom:"1em",
        display: "flex",
        flexDirection:"row",
        justifyContent:"space-between",
        margin: "7px",
        border: "1px solid #dadce0",
        boxShadow: theme.shadows[0],
        transitions: theme.transitions.create("box-shadow"),
        "&:hover": {
            boxShadow: theme.shadows[3]
        }
    },
    body:{
        flexGrow: 1,
        "&:last-child": {
            paddingBottom: 0
        }
    },
    text:{
        textAlign: "initial",
        opacity: ".8",
        marginTop: 5,
        marginBottom: 5,
        fontSize: "15px",
        [theme.breakpoints.only("xs")]: {
            display: 'none'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "13px",
        }
    },
    photo:{
        minWidth: 140,
        width: 140,
        height: 140,
        objectFit: "cover",
        borderRadius: "5px"
    },
    base:{
        minWidth:"-webkit-fill-available",
        width:"-moz-available"
    },

})

export default styles;