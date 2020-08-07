import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {connect} from "react-redux";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import Header from '../../components/Header';
import Title from '../../components/Title';
import MaterialTable from 'material-table';
import Footer from '../../components/Footer';

import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const SAVE_CHANGES ='SAVE_CHANGES'
const useStyle = makeStyles((theme)=>({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    canvas:{
        backgroundColor: '#FFCC66',
        height: '100vh',
        maxWidth: 'sm',
        opacity: '95%',
        position: 'relative'
    },
}));


function MyTable(props){
    const columns =[
        {title: 'Имя',field: 'name', editable: 'always'},
        {title: 'Спортивное звание',field: 'title'},
        {title: 'Регион',field: 'reg'}
    ];
    const classes = useStyle();
    const [data,setData] = useState(props.myStore.rows);
    const saveChanges = () => {
        const exportdata =[];
        data.map((item)=>{
            exportdata.push({name: item.name, title: item.title, reg:item.reg});
        });
        console.log(exportdata);
        props.onSaveChanges(exportdata);
    };
    const discardChanges = () => {
        props.history.push('/editor');
    }
    return(

        <Container className={classes.canvas} disableGutters={true}>
            <Header/>
            <Title/>
            <MaterialTable
                title = {'Заполнение стартовой таблицы ' + props.myStore.tablename}
                columns={columns}
                data={data}
                icons={tableIcons}
                options={{headerStyle: {backgroundColor: '#FFCC66'}}}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setData([...data,newData]);

                                resolve();
                            }, 1000)
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setData([...dataUpdate]);

                                resolve();
                            }, 1000)
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...data];
                                const index = oldData.tableData.id;
                                dataDelete.splice(index, 1);
                                setData([...dataDelete]);

                                resolve()
                            }, 1000)
                        }),
                }}
            />
            <Box className={classes.root}>
                <Button variant="outlined" onClick={saveChanges} >Сохранить изменения</Button>
                <Button variant="outlined" onClick={discardChanges}>Вернуться назад</Button>
            </Box>

            <Footer/>
        </Container>
    );
}
export default connect(
    state =>({
        myStore:state
    }),
    dispatch =>({
        onSaveChanges: (data) => {
            dispatch({
                type: SAVE_CHANGES,
                payload: {rows: data}
            })
        },
    })
)(MyTable);