import { useReducer, createContext, useContext } from 'react'


const CounterContext = createContext(null)

const reducer = (state, action) => {
    switch (action.type){
        case "add":
            return state + 1
        case "reset":
            return 0
        case "sub":
            return state - 1
        case "default":
            return state
    }
}


const CounterContextProvider = ({children}) => {
    return (
        <CounterContext.Provider value={useReducer(reducer, 0)}>
            {children}
        </CounterContext.Provider>
    )
}


const Container = () => {
  return (
    <div>
      <AddOne/>
      <SubOne/>
      <Reset/>
    </div>
  )
}

const AddOne = () => {
    const [, dispatch] = useContext(CounterContext)
  return (
    <div>
        <button onClick={() => dispatch({
            type: "add"
        })}>Add One</button>
    </div>
  )
}

const SubOne = () => {
    const [, dispatch] = useContext(CounterContext)
    return (
        <div>
            <button onClick={() => dispatch({
                type: "sub"
            })}>Sub One</button>
        </div>
      )
}

const Reset = () => {
    const [, dispatch] = useContext(CounterContext)
    return (
        <div>
            <button onClick={() => dispatch({
                type: "reset"
            })}>Restart</button>
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