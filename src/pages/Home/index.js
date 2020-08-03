import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
const editHandler = ()=> {window.location.href='/editor';}
const tickerHandler = ()=> {window.location.href='/ticker';}
const correctionHandler = ()=> {window.location.href='/correction';}
const reportsHandler = ()=> {window.location.href='/reports';}


function Home(){
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
export default Home;