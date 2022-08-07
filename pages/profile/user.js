import { createContext, useContext, useState, useRef } from "react"

const UserContext = createContext(undefined)


function UserProvider({children}){
    
    return (
        <UserContext.Provider value={useState(
             "Shivam Mishra"
        )}>
            
                {children}
            
        </UserContext.Provider>
    )
}

const TopNav =() => {
    const [userDetail, ] = useContext(UserContext)
    console.log(userDetail)
    return (
        <div>{userDetail}</div>
    )
}

const Settings = () => {
    const [,setUserDetails] = useContext(UserContext)
    const nameRef = useRef()
    const handleUpdate = (e) => {
        e.preventDefault()
        
        // console.log(e.target.value)
        setUserDetails(nameRef.current.value)
        nameRef.current.value = ""
        nameRef.current.blur()
    }
    return (
        <form onSubmit={handleUpdate}>  
            <label htmlFor="username">Username</label>
            <input name="username" ref={nameRef}/>
            <button type="submit">Submit</button>
        </form>
    )
}

const Profile = () => {
    return (
        <UserProvider>
            <TopNav/>
            <Settings/>

        </UserProvider>
    )
}

export default Profile