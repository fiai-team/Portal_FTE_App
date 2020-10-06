/*
 * Copyright (c) 2019. Fábrica Introductoria de Aplicaciones Informáticas. Universidad de las Ciencias Informáticas (UCI)
 */
const styles = (theme) => ({
    root:{
        marginTop:"0.5em",
        marginBottom: "1em",
        display: "flex",
        flexDirection:"row",
        backgroundColor:"#eeefff",
    },
    body:{
        display: "flex",
        flexDirection:"column",
        nimWith:"100%",
        justifyContent:"space-between",
        marginTop:"1em",
    },
    title:{
        display: "flex",
        textAlign: "center",
        alignItems:"center",
        justifyContent:"center",
        height:"3em",
    },
    text:{
        marginLeft:"1em"
    },
    photo:{
        borderRadius:"5px",
    },
    data:{
        marginLeft:"1em",
        marginTop:"1em",
    },
})

export default styles;