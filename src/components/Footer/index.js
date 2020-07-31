import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
    footer:{
        width: 'inherit',
        backgroundColor: '#008B8B',
        height: '5vh',
        position: 'absolute',
        bottom: '0px'
    }
}));
 function Footer(){
    const classes = useStyle();
    return(
        <div className={classes.footer}>

        </div>
    );
 }

 export default Footer;