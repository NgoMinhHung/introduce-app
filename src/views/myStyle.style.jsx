import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh",
        backgroundImage: "linear-gradient(#992fc4, #61dafb)",
        display: "flex",
        backgroundSize: 'cover',
        [theme.breakpoints.down("800")]: { 
            height: "100%",
            flexDirection: "column-reverse",
        }
    },
    wrapStyle: {
        width: "50%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        [theme.breakpoints.down("700")]: { 
            width: "100%",
        }
    },
    textNormal: {
        color: "white",
        fontWeight: 200,
        fontSize: "30px",
        margin: "15px"
    },
    textHighLight: {
        fontSize: "40px",
        fontWeight: 600,
        fontFamily: "Roboto"
    },
    iconStyle: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        margin: theme.spacing(1.875),
    },
    iconfb: {
        width: theme.spacing(3),
        height: theme.spacing(4.25),
        margin: theme.spacing(1.875),
    }
}));