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

const newHandler = ()=> {window.location.href='/new';}
const listHandler = ()=> {window.location.href='/open';}
const protocolHandler = ()=> {window.location.href='/protomaker';}
const startHandler = ()=> {window.location.href='/start';}


function EditorMenu(){
    const classes = useStyle();
    return(
            
        <Container className={classes.canvas} disableGutters={true}>
            <Header/>
            <Title/>
            <MenuButton click={newHandler} text='Новая таблица'/>
            <MenuButton click={listHandler} text='Открыть текущую таблицу'/>
            <MenuButton click={protocolHandler} text='Стартовый протокол'/>
            <MenuButton click={startHandler} text='Старт соревнования'/>
            <Footer/>
        </Container>
            );
}
export default EditorMenu;