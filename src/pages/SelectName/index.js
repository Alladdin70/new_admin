import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper  from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DoneIcon from '@material-ui/icons/Done';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import {connect} from "react-redux";
const DENY_NEW ='DENY_NEW';
const ADD_NEW_TABLENAME = 'ADD_NEW_TABLENAME';
const useStyle = makeStyles((theme)=>({
    canvas:{
        backgroundColor: '#FFCC66',
        height: '100vh',
        maxWidth: 'sm',
        opacity: '95%',
        position: 'relative'
        
    },
    topBox:{
        display: 'block',
        height: '20vh',
        width: '100%'
    },
    form:{
        backgroundColor: '#FFCC66'
    },
    text:{
        width: '100%',
        backgroundColor: 'white'
    },
    button: {
        margin: theme.spacing(1),
        fontFamily:"'Times New Roman', Times, serif ",
        fontSize: '90%'
      }
}));


function SelectName(props){
    const backHandler = () => {
        props.onDenyNew();
        props.history.push('/editor');
    };
    const [text,setText] = useState('');
    const textHandler = (event) => {
        setText(event.target.value);
    };
    const classes=useStyle();
    const doneHandler = () => {
        if(/^[a-zA-Z0-9_]+$/.test(text)){ //Проверка символов в названии таблицы
            fetch("/newtable?name=" + text).then(response=>response.text()).then((response) => {
                if(response.slice(0,5) === "Error"){
                    alert(response);
                }
                else{
                    props.onAddNewTablename(text);
                    props.history.push('/edit/'+ text);
                }
            }).catch((error)=>{
                console.log(error);
            });
        }
        else{
            alert('Ошибка! Название может содержать только латинские буквы, цифры и знак подчеркивания');
        }    
    };
    return(
        <Container className={classes.canvas} disableGutters={true}>
            <Header/>
            <Title/>
            <Box className={classes.topBox}/>
            <Grid container spacing={1}>
                <Grid item xs={4}/>
                <Grid item xs={4}>
                    <Paper className={classes.form} variant="outlined">

                    <TextField 
                        id="outlined-basic" 
                        label="Название таблицы"
                        variant="outlined" 
                        className={classes.text} 
                        onChange={textHandler}
                    />
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<ArrowBackIcon />}
                        onClick={backHandler}
                    >
                        <b>ОТКАЗ</b>
                    </Button>
                    <Button
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<DoneIcon />}
                        onClick={doneHandler}
                    >
                        <b>СОЗДАТЬ</b>
                    </Button>
                    </Paper>
                </Grid>
                <Grid item xs={4}/>

            </Grid>
            
            <Footer/>
        </Container>
    );

}

export default connect(
    state =>({
        myStore:state
    }),
    dispatch =>({
        onAddNewTablename: (text)=>{
            dispatch({
                type: ADD_NEW_TABLENAME,
                payload: {tablename:text}
            })
        },
        onDenyNew: () => {
            dispatch({
                type: DENY_NEW,
                payload: {}
            })
        }
    })
)(SelectName);