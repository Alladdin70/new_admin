import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
    button:{
        width: '49.5%',
        backgroundColor: 'yellow',
        height: '37.5vh',
        border: '2px solid white',
        borderRadius: '10px',
        color: 'grey',
        textAlign: 'center',
        lineHeight: '37.5vh',
        fontFamily:"'Times New Roman', Times, serif ",
        fontSize: '130%',
        display: 'inline-block'
    }
}));
 function MenuButton(){
    const classes = useStyle();
    return(
        <div className={classes.button}>
            <b>Интерфейс администратора системы</b>
        </div>
    );
 }

 export default MenuButton;