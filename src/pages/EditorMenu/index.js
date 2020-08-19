import React from 'react';
import {connect} from 'react-redux';

import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import MenuButton from '../../components/MenuButton';

const ADD_NEW_TABLE = 'ADD_NEW_TABLE';
const GET_TABLES = 'GET_TABLES';
const useStyle = makeStyles((theme)=>({
    canvas:{
        backgroundColor: '#FFCC66',
        height: '100vh',
        maxWidth: 'sm',
        opacity: '95%',
        position: 'relative'
        
    }
}));






const startHandler = ()=> {window.location.href='/start';};


function EditorMenu(props){
    const classes = useStyle();
    const newHandler = ()=> {
        props.onAddNew();
        props.history.push('/new');  
    };
    const listHandler = ()=> {
        fetch('/tables').then(res=>res.json()).then((res)=>{
            console.log(res);
            props.onGetTables(res);
        });
        props.history.push('/open');
    };
    const protocolHandler = ()=> props.history.push('/protomaker');
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
export default connect(
    state =>({
        myStore:state
    }),
    dispatch =>({
        onAddNew: ()=>{
            dispatch({
                type: ADD_NEW_TABLE,
                payload: {rows:[], tablename:'',tables:[]}
            })
        },
        onGetTables: (tables)=>{
            dispatch({
                type: GET_TABLES,
                payload: {tables: tables}
            })
        }
    })
)(EditorMenu);