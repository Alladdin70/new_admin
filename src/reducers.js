const initialState = {
    rows:[],
    tablename:'',
    tables:[],
    tables2:[],
    tables3:[],
    usedSlots:['','','','',''],
    current:false
};

export const myReducer = (state=initialState,action) => {
    if(action.type === 'ADD_NEW_TABLE'){return {...state};}
    if(action.type === 'ADD_NEW_TABLENAME'){return {...state, tablename:action.payload.tablename};}
    if(action.type === 'CLEAR_DATA'){return {...state,rows:action.payload.rows}}
    if(action.type === 'ADD_ROW'){return {...state,rows: [...state.rows, action.payload]};}
    if(action.type === 'SAVE_CHANGES'){return {...state,rows: action.payload.rows};}
    if(action.type === 'GET_TABLES'){return{...state,tables: action.payload.tables};}
    if(action.type === 'GET_TABLES2'){return{...state,tables2: action.payload.tables};}
    if(action.type === 'GET_TABLES3'){return{...state,tables3: action.payload.tables};}
    if(action.type === 'CHANGE_RADIO'){return{...state,ablename: action.payload.tablename};}
    if(action.type === 'SELECT_TABLE'){return{...state,rows: action.payload.rows};}
    if(action.type === 'DELETE_TABLE'){return{...state,tables: action.payload.tables};}
    if(action.type === 'CHANGE_TABLE_NAME'){return{...state,usedSlots: action.payload.usedSlots};}
    if(action.type === 'DENY_NEW'){return {...state};}
    else{return {...state};}
}
