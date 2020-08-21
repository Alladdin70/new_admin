import React,{useState} from "react";
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import {FormControlLabel, Grid, Radio, RadioGroup} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
   radio:{
       textAlign:"left"
   },
   grid:{
       border: "1px solid lightgray",
       borderRadius: "10px"
   },
}));

const SectorStart= (props) => {
    const classes = useStyle();
    const [name,setName] = useState('');
    const handleChange = (event) =>{
        setName(event.target.value);
    }
    return (
        <RadioGroup aria-label="Таблицы" name="table" value={name} onChange={handleChange}>
            <Grid container spacing={3}>
                <Grid className={classes.grid} item xs={4}>
                    {"1-й круг"}
                    {
                        props.myStore.tables.map((table,index)=>(
                            <div className={classes.radio}>
                                <FormControlLabel value={table} control={<Radio/>} label={table} key={`radio-${index}`}/>
                            </div>
                        ))
                    }
                </Grid>
                <Grid className={classes.grid} item xs={4}>
                    {"2-й круг"}
                    {
                        props.myStore.tables2.map((table,index)=>(
                            <div className={classes.radio}>
                                <FormControlLabel value={table} control={<Radio/>} label={table} key={`radio-${index}`}/>
                            </div>
                        ))
                    }
                </Grid>
                <Grid className={classes.grid} item xs={4}>
                    {"3-й круг"}
                    {
                        props.myStore.tables3.map((table,index)=>(
                            <div className={classes.radio}>
                                <FormControlLabel value={table} control={<Radio/>} label={table} key={`radio-${index}`}/>
                            </div>
                        ))
                    }
                </Grid>
            </Grid>
        </RadioGroup>
    );

};




export default connect(
    state =>({
        myStore:state
    }),
    dispatch =>({})
)(SectorStart);