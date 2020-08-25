import React,{useState} from "react";
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import {FormControlLabel, Grid, Radio, RadioGroup, Paper, Box,Button} from "@material-ui/core";

const CHANGE_TABLE_NAME = 'CHANGE_TABLE_NAME';
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
    const slots = props.myStore.usedSlots;
    const index = parseInt(props.index) - 1;
    const classes = useStyle();
    const [name,setName] = useState(slots[index]);
    const handleChange = (event) =>{
        setName(event.target.value);
        slots[index] = event.target.value;
        props.onChangeTableName(slots);
    }
    const handleClrButton = () => {
        slots[index] = "";
        props.onChangeTableName(slots);
        setName("");
    };
    return (
        <div>
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
        <Box style={{height:'15vh'}}/>
        <Paper>
            <Grid container spacing={3}>
                <Grid item xs={2}>{slots[0]}</Grid>
                <Grid item xs={2}>{slots[1]}</Grid>
                <Grid item xs={2}>{slots[2]}</Grid>
                <Grid item xs={2}>{slots[3]}</Grid>
                <Grid item xs={2}>{slots[4]}</Grid>
                <Grid item xs={2}>
                    <Button variant="outlined" onClick={handleClrButton}>Отменить</Button>
                </Grid>
            </Grid>
        </Paper>
        </div>
    );

};




export default connect(
    state =>({
        myStore:state
    }),
    dispatch =>({
        onChangeTableName:(slots) =>{
            dispatch({
                type: CHANGE_TABLE_NAME,
                payload:{usedSlots:slots}
            })
        }
    })
)(SectorStart);