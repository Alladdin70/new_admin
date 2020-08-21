import React from 'react';
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import MenuButton from '../../components/MenuButton';


const useStyle = makeStyles((theme)=>({
    canvas:{
        backgroundColor: '#FFCC66',
        height: '100vh',
        maxWidth: 'sm',
        opacity: '95%',
        position: 'relative'
        
    }
}));

function Home(props){
    const editHandler = ()=> {props.history.push('/editor');};
    const tickerHandler = ()=> {props.history.push('/ticker');};
    const correctionHandler = ()=> {props.history.push('/correction');};
    const reportsHandler = ()=> {props.history.push('/reports');};
    const classes = useStyle();

    return(
        <Container className={classes.canvas} disableGutters={true}>
            <Header/>
            <Title/>
            <MenuButton click={editHandler} text='Стартовые таблицы'/>
            <MenuButton click={tickerHandler} text='Бегущая строка'/>
            <MenuButton click={correctionHandler} text='Коррекция результатов'/>
            <MenuButton click={reportsHandler} text='Отчеты'/>
            <Footer/>
        </Container>
    );
}

export default connect(
    state =>({
        myStore:state
    }),
    dispatch =>({})
)(Home);