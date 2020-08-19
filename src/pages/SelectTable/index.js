import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {makeStyles} from '@material-ui/core/styles';
import {Container,Button,ButtonGroup, Paper} from '@material-ui/core/';
import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Box} from "@material-ui/core";


import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';

const CHANGE_RADIO ='CHANGE_RADIO';
const SELECT_TABLE ='SELECT_TABLE';
const DELETE_TABLE = 'DELETE_TABLE';
const useStyle = makeStyles((theme)=>({
    canvas:{
        backgroundColor: '#FFCC66',
        height: '100vh',
        maxWidth: 'sm',
        opacity: '95%',
        position: 'relative'

    },
    button:{
        margin: theme.spacing(0),
        display: "inline"
    },
    form:{
        minWidth: '500px'
    }
}));

const SelectTable = (props) => {
    const classes = useStyle();
    const [name,setName] = useState('');
    const handleChange = (event) => {
        setName(event.target.value);
        props.onChangeRadio(event.target.value);
    };
    const handleButton = () => {
        fetch('/gettable?name=' + name)
            .then(res=>res.json())
            .then((res)=>{
                props.onSelectTable(res);
                props.history.push('/edit/' + name);
            })
    };
    const handleDelButton = () => {
        let tables = props.myStore.tables.filter((tablename)=>{
            return tablename !== name;
        });
        props.onDeleteTable(tables);
    };
    const handleBackButton = () =>{
        props.history.push('/editor');
    };
    return(
        <Container className={classes.canvas} disableGutters={true}>
            <Header/>
            <Title/>
            <Box style={{color:'gray'}}><h3>ВЫБОР ТАБЛИЦЫ ДЛЯ РЕДАКТИРОВАНИЯ</h3></Box>
            <Paper>
                <FormControl component="fieldset" className={classes.form}>
                    <FormLabel component="legend">Доступные для редактирования таблицы</FormLabel>
                    <RadioGroup aria-label="Таблицы" name="table" value={name} onChange={handleChange}>
                        {
                            props.myStore.tables.map((table,index)=>(
                            <FormControlLabel value={table} control={<Radio/>} label={table}/>
                            ))
                        }
                    </RadioGroup>
                    <ButtonGroup>
                        <Button className={classes.button} variant="outlined" color="default" onClick={handleButton}>
                            Загрузить таблицу
                        </Button>
                        <Button className={classes.button} variant="outlined" color="default" onClick={handleDelButton}>
                            Удалить таблицу
                        </Button>
                        <Button className={classes.button} variant="outlined" color="default" onClick={handleBackButton}>Вернуться назад</Button>
                    </ButtonGroup>
                </FormControl>
            </Paper>
            <Footer/>
        </Container>
    );
}

export default connect(
    state =>({
        myStore:state
    }),
    dispatch =>({
        onChangeRadio: (tn) => {
            dispatch({
                type: CHANGE_RADIO,
                payload : {tablename: tn}
            })
        },
        onSelectTable: (rows)=>{
            dispatch({
                type: SELECT_TABLE,
                payload:{rows: rows}
            })
        },
        onDeleteTable: (tables) => {
            dispatch({
                type: DELETE_TABLE,
                payload:{tables:tables}
            })
        }
    })
)(SelectTable);