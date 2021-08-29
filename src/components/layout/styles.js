import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    layout: {
        height: "100vh",
        textAlign: "center"
    },
    content: {
        padding: "40px 200px",
        '@media (max-width:1600px)': {
            padding: "40px 100px",
            '& img': {
                width: "80%"
            }
        },
        '@media (max-width:900px)': {
            padding: "40px 50px",
            '& img': {
                width: "60%"
            }
        }
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