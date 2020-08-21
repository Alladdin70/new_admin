import React,{useState} from "react";
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import {Container,AppBar,Box,Tabs,Tab,Typography} from '@material-ui/core';
import SectorStart from "../SectorStart";

const TabPanel = (props)=>{
    const {children,value,index, ...other} = props;
    return(
        <div
            role="tabpanel"
            hidden={value !==index}
            id={`tabpanel-item-${index}`}
            aria-labelledby={`tab-item-${index}`}
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
    appbar:{
        backgroundColor:'lightgray',
        color: 'black',
        border: '1px solid white',
        borderRadius: '10px'
    }
}));

const tabProps = (index) =>{
    return{
        id: `tab-item-${index}`,
        'aria-controls': `tab-item-${index}`,
    }
};
const StartTableSelector = (props) => {
    const classes = useStyle();
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <div className={classes.root}>
            <AppBar className={classes.appbar} position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Сектор 1" {...tabProps(0)}/>
                    <Tab label="Сектор 2" {...tabProps(1)}/>
                    <Tab label="Сектор 3" {...tabProps(2)}/>
                    <Tab label="Сектор 4" {...tabProps(3)}/>
                    <Tab label="Сектор 5" {...tabProps(4)}/>
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}><SectorStart index={1}/></TabPanel>
            <TabPanel value={value} index={1}><SectorStart index={2}/></TabPanel>
            <TabPanel value={value} index={2}><SectorStart index={3}/></TabPanel>
            <TabPanel value={value} index={3}><SectorStart index={4}/></TabPanel>
            <TabPanel value={value} index={4}><SectorStart index={5}/></TabPanel>
        </div>
    );



};
export default connect(
    state =>({
        myStore:state
    }),
    dispatch =>({})
)(StartTableSelector);