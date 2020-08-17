import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import {makeStyles} from '@material-ui/core/styles';
import {Container,Button} from '@material-ui/core/';
import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from "@material-ui/core";


import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';

const CHANGE_RADIO ='CHANGE_RADIO';
const SELECT_TABLE ='SELECT_TABLE';
const useStyle = makeStyles((theme)=>({
    canvas:{
        backgroundColor: '#FFCC66',
        height: '100vh',
        maxWidth: 'sm',
        opacity: '95%',
        position: 'relative'

    },
    button:{
        margin: theme.spacing(1,1,0,0)
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
    return(
        <Container className={classes.canvas} disableGutters={true}>
            <Header/>
            <Title/>
            <FormControl component="fieldset">
                <FormLabel component="legend">Доступные для редактирования таблицы</FormLabel>
                <RadioGroup aria-label="Таблицы" name="table" value={name} onChange={handleChange}>
                    {
                        props.myStore.tables.map((table,index)=>(
                        <FormControlLabel value={table} control={<Radio/>} label={table}/>
                        ))
                    }
                </RadioGroup>
                <Button className={classes.button} variant="outlined" color="default"onClick={handleButton}>
                    Загрузить таблицу
                </Button>
            </FormControl>


            <div></div>
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
        }
    })
)(SelectTable);