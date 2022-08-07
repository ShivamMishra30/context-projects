import { createContext, useContext, useState, useRef } from "react"

const UserContext = createContext(undefined)
const UserDispatch = createContext(undefined)

function UserProvider({children}){
    const [userDetail, setUserDetail] = useState("Shivam Mishra")

    return (
        <UserContext.Provider value={userDetail}>
            <UserDispatch.Provider value={setUserDetail}>
                {children}
            </UserDispatch.Provider>
        </UserContext.Provider>
    )
}

const TopNav =() => {
    const userDetail = useContext(UserContext)
    console.log(userDetail)
    return (
        <div>{userDetail}</div>
    )
}

const Settings = () => {
    const setUserDetail = useContext(UserDispatch)
    const nameRef = useRef()
    const handleUpdate = (e) => {
        e.preventDefault()
        
        // console.log(e.target.value)
        setUserDetail(nameRef.current.value)
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