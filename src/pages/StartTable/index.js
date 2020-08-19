import React from 'react';
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';



const useStyle = makeStyles((theme)=>({
    canvas:{
        backgroundColor: '#FFCC66',
        height: '100vh',
        maxWidth: 'sm',
        opacity: '95%',
        position: 'relative'

    }
}));

const StartTable = () =>{
    const classes = useStyle();
    return(

        <Container className={classes.canvas} disableGutters={true}>
            <Header/>
            <Title/>

            <Footer/>
        </Container>
    );
}
export default connect(
    state =>({
        myStore:state
    }),
    dispatch =>({})
)(StartTable);