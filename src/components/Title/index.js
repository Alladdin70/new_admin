import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
    title:{
        width: '100%',
        backgroundColor: 'grey',
        height: '5vh',
        border: '1px solid white',
        borderRadius: '10px',
        color: 'white',
        textAlign: 'center',
        lineHeight: '5vh',
        opacity: '95%',
        fontFamily:"'Times New Roman', Times, serif ",
        fontSize: '130%'
    }
}));
 function Title(){
    const classes = useStyle();
    return(
        <div className={classes.title}>
            <b>Интерфейс администратора системы</b>
        </div>
    );
 }

 export default Title;