import React from 'react'
import './button.css'
 function button(props) {
     return (
         <>
         <button className="ButtonSign"
           onClick={props.clicked}>{props.children}</button>  
         </>
     )
 }
 
 export default button
 