import React, {useState} from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import states from "../../states";

const ADD_ROW = 'ADD_ROW';
const CLEAR_DATA = 'CLEAR_DATA';
const blank = '';
const field = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
        return "100%";
    } else {
        return "50%";
    }
}

const field1 = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
        return "100%";
    } else {
        return "33.3%";
    }
}

const useStyle = makeStyles((theme)=>({
    canvas:{
        backgroundColor: '#FFCC66',
        height: '100vh',
        maxWidth: 'sm',
        opacity: '95%',
        position: 'relative'
        
    },
    formControl: {
        minWidth: field(),
        textAlign: "center"
    }
}));



function Editor(props){
    const rows = props.myStore.rows;
    const lencheck = (props) =>{
        if(props.myStore.rows && props.myStore.rows[0]){
            return(
                <TableHead>
                    <TableRow>
                        <TableCell><b>Игрок</b></TableCell>
                        <TableCell align="center"><b>Спортивное звание</b></TableCell>
                        <TableCell align="center"><b>Регион</b></TableCell>
                    </TableRow>
                </TableHead>
            );
        }
        else{
            return (<div align="center">Пустой список</div>);
        }
    };
    const classes = useStyle();
    const[name,setName] = React.useState('');
    const handleChangeName = (event)=>{
        setName(event.target.value);
    }
    const[title,setTitle] = React.useState('');
    const handleChange = (event)=>{
        setTitle(event.target.value);
    };

    const[reg, setReg] = useState(undefined);
    const[inputValue,setInputValue] = useState(blank);

    const handleSaveClick = () => {
        props.onAddRow(name,title,reg);
        setName('');
        setTitle('');
        setReg(blank);
        setInputValue(blank);
    };

    const handleTestClick = () => {
        props.history.push('/mytable')
    }

    const handleBackClick = () => {
        props.onClear();
        props.history.push('/editor');
    };

    return(
            
        <Container className={classes.canvas} disableGutters={true}>
            <Header/>
            <Title/>
            <Typography>
                <Paper>
                    <TextField
                        className={classes.formControl}
                        id="outlined-basic"
                        variant="outlined"
                        value={name}
                        onChange={handleChangeName}
                        InputProps={{
                            startAdornment:(
                                <InputAdornment position="start">
                                    <AccountCircle/>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <FormControl variant="outlined" className={classes.formControl}>
                        <Select
                            onChange={handleChange}
                            value = {title}
                        >
                            <MenuItem value= "3ЮР">1ЮР</MenuItem>
                            <MenuItem value= "2ЮР">1ЮР</MenuItem>
                            <MenuItem value= "1ЮР">1ЮР</MenuItem>
                            <MenuItem value= "3р">3Р</MenuItem>
                            <MenuItem value= "2Р">2Р</MenuItem>
                            <MenuItem value= "1Р">1Р</MenuItem>
                            <MenuItem value= "КМС">КМС</MenuItem>
                            <MenuItem value= "МС">МС</MenuItem>
                        </Select>
                    </FormControl>
                    <Autocomplete
                        renderInput={(params => <TextField{...params} variant="outlined"/> )}
                        options={states}
                        value={reg}
                        getOptionSelected={(event,newValue)=>{setReg(newValue);}}
                        //onChange={(event,newValue)=>{setReg(newValue)}}
                        inputValue={inputValue}
                        onInputChange={(event,newInputValue)=>{setInputValue(newInputValue)}}
                    />
                    <Button
                        name={name}
                        variant="outlined"
                        style={{minWidth:field1()}}
                        onClick={handleSaveClick}
                    >Добавить</Button>
                    <Button
                        variant="outlined"
                        style={{minWidth:field1()}}
                        onClick={handleTestClick}
                    >Записать</Button>
                    <Button
                        variant="outlined"
                        style={{minWidth:field1()}}
                        onClick={handleBackClick}
                    >Назад</Button>
                </Paper>
            </Typography>
            <TableContainer>
                <Table>
                    {lencheck(props)}
                    <TableBody>
                        {rows.map((row)=>(
                            <TableRow key={row.name}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="center">{row.title}</TableCell>
                                <TableCell align="center">{row.reg}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Footer/>
        </Container>
            );
}
export default connect(
    state =>({
        myStore:state
    }),
    dispatch =>({
        onAddRow: (name,title,reg) => {
            dispatch({
                type: ADD_ROW,
                payload: {name:name, title: title, reg:reg}
            })
        },
        onClear: () => {
            dispatch({
                type: CLEAR_DATA,
                payload: {rows:[],tablename:''}
            })
        }
    })
)(Editor);
