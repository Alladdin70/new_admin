import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';




const useStyle = makeStyles((theme)=>({
    canvas:{
        backgroundColor: '#FFCC66',
        height: '100vh',
        maxWidth: 'sm',
        opacity: '95%',
        position: 'relative'
        
    }
}));



function Editor(props){
    const classes = useStyle();
    console.log(props);
    return(
            
        <Container className={classes.canvas} disableGutters={true}>
            <Header/>
            <Title/>
            <Paper>{props.match.params.tablename}</Paper>
            <Footer/>
        </Container>
            );
}
export default Editor;