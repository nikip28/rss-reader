import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightBold,
    },
    publish: {
        textAlign: "left"
    },
    feedInfo: {
        display: "flex",
        justifyContent: "space-between"
    },
    form: {
        marginBottom: "20px",
    },
    formButton: {
        margin: "10px 0  0 10px"
    },
    formInput: {
        padding: "0.5rem 0",
        width: "500px"
    },
    bookmarkIcon: {
        cursor: "pointer"
    },
    bookmarked: {
        color: "green",
        fontSize: 30
    },
    noBookmark: {
        color: "grey",
        fontSize: 30
    }
}));


export default useStyles;