import React, { useState } from 'react'

function FormInput() {

  const [number,setNumber]=useState();
  const [number2,setNumber2]=useState();
  const [total,setTotal]=useState(number + number2);
   
function addTotal(){
  setTotal(number+number2)
}


  return (
    <div>
        <h1>Adding Two Numbers</h1>
        <input type ="number" placeholder='FirstNumber' value={number} onChange={e=> setNumber(+e.target.value)}/>
        <input type ="number" placeholder='SecondNumber' value ={number2} onChange={e=> setNumber2(+e.target.value)}/>
        <button onClick={addTotal}>Add Two Numbers</button>
        <h2>{total}</h2>
        </div>
        
  )
}

export default FormInput