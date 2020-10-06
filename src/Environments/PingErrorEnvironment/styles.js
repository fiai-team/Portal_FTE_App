const styles = theme => ({
    container: {
        "-webkit-align-items": "center",
        "-ms-flex-align": "center",
        alignItems: "center",
        bottom: 0,
        color: "#3c4043",
        display: "flex",
        fontFamily: "Roboto, Arial, Helvetica, sans-serif",
        fontSize: "16px",
        justifyContent: "center",
        left: 0,
        lineHeight: "24px",
        position: "absolute",
        right: 0,
        "-webkit-text-size-adjust": "100%",
        textSizeAdjust: "100%",
        top: 0,
    },
    space: {
        padding: "4px",
        textAlign: "center",
    },
    header: {
        color: "#000000",
        fontFamily: "'Google Sans', Arial, Helvetica, sans-serif",
        fontSize: "32px",
        fontWeight: 400,
        lineHeight: "40px",
        margin: "32px 0 0",
    },
    message: {
        fontFamily: "Roboto, Arial, sans-serif",
        fontSize: "16px",
        fontWeight: 400,
        letterSpacing: "0.2px",
        lineHeight: "24px",
        margin: "8px 0",
    }
});

export default styles;