import { useState, createContext, useContext } from 'react'


const CounterContext = createContext(null)

const CounterContextProvider = ({children}) => {
    

    return (
        <CounterContext.Provider value={useState(0)}>
            {children}
        </CounterContext.Provider>
    )
}


const Container = ({setCounter}) => {
  return (
    <div>
      <AddOne setCounter={setCounter}/>
    </div>
  )
}

const AddOne = () => {
    const [, setCounter] = useContext(CounterContext)
  return (
    <div>
        <button onClick={() => setCounter((v) => v+1)}>Add One</button>
    </div>
  )
}

const Counter = () => {
    const [counter, ] = useContext(CounterContext)

  return (
    <div>Counter: {counter}</div>
  )
}


const counteruseState = () => {
  return (
    <CounterContextProvider>
        <Container/>
            
        <Counter />
  </CounterContextProvider>
  )
}

export default counteruseState