/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
const styles = theme => ({
    aboutCard: {
        display: "flex",
        margin: "7px 5px",
    },
    content: {
        padding: "0 10px",
        "&:last-child": {
            paddingBottom: 0
        },
        width: '100%',
    },
    text:{

    },
    author:{
        textAlign:"right",
        opacity: .6,
    },
})

export default styles;