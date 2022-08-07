import React from 'react'
import { useState } from 'react'

const container = ({setCounter}) => {
  return (
    <div>
      <AddOne setCounter={setCounter}/>
    </div>
  )
}

const AddOne = ({setCounter}) => {
  return (
    <button onClick={() => setCounter((v) => v+1)}>Add One</button>
  )
}

const Counter = ({counter}) => {
  return (
    <div>Counter: {counter}</div>
  )
}


const counteruseState = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
        <AddOne setCounter={setCounter}/>
        <Counter counter={counter}/>
  </>
  )
}

export default counteruseState