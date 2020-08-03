import React from 'react';
import './styles.css'

 function MenuButton(props){
    return(
        <div className="button" onClick={props.click}><b>{props.text}</b></div>
    );
 }
 export default MenuButton;