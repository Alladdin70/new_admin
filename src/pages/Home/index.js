import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import MenuButton from '../../components/MenuButton';


const useStyle = makeStyles((theme)=>({
    canvas:{
        backgroundColor: 'yellow',
        height: '100vh',
        maxWidth: 'sm',
        opacity: '90%',
        position: 'relative'
        
    }
}));
const editHandler = ()=> {window.location.href='/editor';}
const tickerHandler = ()=> {window.location.href='/ticker';}


function Home(){
    const classes = useStyle();
    return(
            
        <Container className={classes.canvas} disableGutters={true}>
            <Header/>
            <Title/>
            <MenuButton click={editHandler} text='Стартовые таблицы'/>
            <MenuButton click={tickerHandler} text='Бегущая строка'/>
            <MenuButton/>
            <MenuButton/>
            <Footer/>
        </Container>
            );
}
export default Home;