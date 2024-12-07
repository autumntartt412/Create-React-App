import { useState } from 'react'
import './App.css'


   
function Content(props) {
  return (<p style={{color: props.color}}>{{color: props.text}}</p>);
} 


export default Content