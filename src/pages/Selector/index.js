import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import{makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Empty from "../Empty";

const useStyles = makeStyles((theme)=>({
    canvas:{
        backgroundColor: 'yellow',
        opacity: '95%',
        textAlign: "center"
    },
    buttonstyle:{
        height: '35vh',
        border:'1px solid #008B8B',
        borderRadius: '1',
        backgroundColor: 'yellow',
        opacity: '95%',
        margin: "auto"
    },
    link:{
        lineHeight: '35vh'
    },
    footer:{
        display: 'box',
        width: '100%',
        height: '5vh',
        backgroundColor:'#008B8B',
        marginBottom: "0px"
    }
}));

function Selector() {
    const classes = useStyles();
    return(
        <div>
        <Container className={classes.canvas}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Paper className={classes.buttonstyle}>
                        <Link to={'/selector/new'} className={classes.link}>Новая таблица</Link>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper  className={classes.buttonstyle}>
                        <Link to={'/selector/exists'} className={classes.link}>Выбор таблицы</Link>
                    </Paper>
                </Grid>
            </Grid>
            <Switch>
                <Route exact path="/selector" component={Empty}/>
            </Switch>
        </Container>
        <Box className={classes.footer}></Box>
        </div>
    );
}

export  default Selector;