export default theme => ({
    promotionalVideo: {
        width: '65%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        [theme.breakpoints.only('xs')]: {
            width: '98%',
        }
    }
});