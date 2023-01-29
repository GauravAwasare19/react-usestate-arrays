import React from 'react'
import { useState } from 'react'

const UseStateObject =() => {
    const [myObject, setMyObject] = useState({
        myName:"Gaurav" , myAge:20 , degree:"BE-IT"
    })
    const changeObj = ()=>{
        setMyObject({...myObject, myName:"Gaurav Awasare"})
    }
    return(
        <div>
            <h1>Name:{myObject.myName} Age:{myObject.myAge} Degree:{myObject.degree}</h1>
            <button onClick={changeObj}>Update</button>
        </div>
    )
}
export default UseStateObject