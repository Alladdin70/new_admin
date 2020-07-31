import React from 'react';
import{makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme)=>({
    canvas:{
        backgroundColor: 'yellow',
        opacity: '95%',
        textAlign: "center",
        height: '60vh'
    },
    footer:{
        display: 'box',
        width: '100%',
        height: '5vh',
        backgroundColor:'#008B8B',
        marginBottom: "0px"
    }
}));

function Empty() {
    const classes = useStyles();
    return(

        <Container className={classes.canvas}></Container>

    );
}

export  default Empty;