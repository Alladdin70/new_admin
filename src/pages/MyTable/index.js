import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import MaterialTable from 'material-table';

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



function MyTable(props){
    const myData = []
    props.myStore.rows.map((row)=>{
        myData.push({name: row.name, title: row.title, reg: row.reg});
    });
    console.log(myData);
    const[state,setState] = useState({
        columns:[
            {title: 'Name',field: 'name'},
            {title: 'Title',field: 'title'},
            {title: 'Region',field: 'reg'}
        ],
        data: myData
    });
    console.log(state);
    const classes = useStyle();
    return(

        <Container className={classes.canvas} disableGutters={true}>
            <Header/>
            <Title/>
            <MaterialTable columns={state.columns} data={state.data}/>
            <Footer/>
        </Container>
    );
}
export default connect(
    state =>({
        myStore:state
    }),
    dispatch =>({})
)(MyTable);