const styles = theme => ({
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
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
        padding: "10px"
    },
    mainRaised: {
        margin: "-60px 30px 20px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    avatarBrand: {
        width: "120px",
        height: "120px",
        objectFit: "scale-down",
        marginLeft: "auto",
        marginRight: "auto",
    },
});

export default styles;
