import React, {useState} from 'react';
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import {Container,AppBar,Box,Tabs,Tab,Typography} from '@material-ui/core';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';


const TabPanel = (props)=>{
    const {children,value,index, ...other} = props;
    return(
        <div
            role="tabpanel"
            hidden={value !==index}
            id={`main-tabpanel-item-${index}`}
            aria-labelledby={`main-tab-item-${index}`}
            {...other}
        >
            {value === index &&(
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};




const useStyle = makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        backgroundColor:theme.palette.background.paper
    },
    canvas:{
        backgroundColor: '#FFCC66',
        height: '100vh',
        maxWidth: 'sm',
        opacity: '95%',
        position: 'relative'

    },
    appbar:{
        backgroundColor:'lightgray',
        color: 'black',
        border: '1px solid white',
        borderRadius: '10px'
    }
}));

const mainTabProps = (index) =>{
    return{
        id: `main-tab-item-${index}`,
        'aria-controls': `main-tab-item-${index}`,
    }

};

const StartTable = () =>{
    const classes = useStyle();
    const [value,setValue] = useState(0);
    const handleChange = (event, newValue) =>{
        setValue(newValue);
    };
    return(

        <Container className={classes.canvas} disableGutters={true}>
            <Header/>
            <Title/>
            <div className={classes.root}>
                <AppBar className={classes.appbar} position="static">
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Новое соревнование" {...mainTabProps(0)}/>
                        <Tab label="Текушее соревнование" {...mainTabProps(1)} disabled={false}/>
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>1</TabPanel>
                <TabPanel value={value} index={1}>2</TabPanel>
            </div>
            <Footer/>
        </Container>
    );
}
export default connect(
    state =>({
        myStore:state
    }),
    dispatch =>({})
)(StartTable);