import {container} from "../components/mainStyles";

const styles = (theme) => ({
    container: {
        ...container
    },
    toolbarFix: {
        minHeight: 120,
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
    aboutCard: {
        display: "flex",
        margin: "7px 5px",
    },
    content: {
        "&:last-child": {
            paddingBottom: 0
        },
        width: "100%",
        margin: 0,
        padding: 0,
    },
    socialLinksList: {
        padding: 0,
    },
    pinAvatar: {
        borderRadius: "25%",
        width: 50,
        height: 50,
        backgroundColor: theme.colors.red
    },
    alertIcon: {
        //transform: "rotate(-45deg)",
    },
    alertCard: {
        display: "flex",
        alignItems: "center",

        margin: "5px",
        "&:hover": {
            boxShadow: theme.shadows[4]
        }
    },
    alertButton: {
        padding: "7px",
        width: "100%",
        display: "flex",
        justifyContent: "start",
    },
    alertMessage: {
        marginLeft: "7px",
        fontFamily: "inherit",
        fontSize: "1rem"
    },
});

export default styles;
