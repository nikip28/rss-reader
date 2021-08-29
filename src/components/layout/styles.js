import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    layout: {
        height: "100vh",
        textAlign: "center"
    },
    content: {
        padding: "40px 200px"
    },
    header: {
        display: "flex",
        color: "white",
        backgroundColor: "#2650c1",
        minHeight: "70px",
        fontSize: "12px"
    },
    title: {
        marginLeft: "20px"
    },
    formInput: {
        padding: "0.5rem 0",
        width: "500px"
    }
}));

export default useStyles;