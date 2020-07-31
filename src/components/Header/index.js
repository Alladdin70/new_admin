import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
    header:{
        width: '100%',
        backgroundColor: '#008A8A',
        height: '15vh',
        opacity: '99%'
    }
}));
 function Header(){
    const classes = useStyle();
    return(
        <div className={classes.header}>

        </div>
    );
 }

 export default Header;