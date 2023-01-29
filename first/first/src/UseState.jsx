import { useState } from 'react'



function UseStateArray() {

  const bioData =[
    {
      id:0, myName:"Gaurav" , age:20
    },
    {
      id:1, myName:"Ashish" , age:18
    },
    {
      id:2, myName:"Mayur" , age:26
    },
    {
      id:3, myName:"Suraj" , age:29
    }
  ]

  const [myArray, setMyArray] = useState(bioData);

  const clearScreen = () =>{
    setMyArray([]);
  }

  return (
    <>
    {
        myArray.map((curElm)=><h1 key={curElm.id}>Name:{curElm.myName} Age:{curElm.age}</h1>)
    }
    <button onClick={clearScreen}>Clear</button>
    </>
  )
}

export default UseStateArray