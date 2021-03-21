import React, { useState, useEffect } from "react"

export const UserContext = React.createContext()

export const UserProvider = (props) =>{
    const[users,setUsers] = useState([])
    const[user, setUser] = useState({user:{}})

    const getAllUsers = () => {
        return fetch("http://localhost:8000/users",{
            headers: {
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`
            }
        })
        .then((res) => res.json())
        .then(setUsers);
    }

    const getSingleUsers = (id) =>{
        return fetch (`http://localhost:8000/users/${id}`,{
            headers : {
                "Authorization":`Token ${localStorage.getItem("event_user_id")}`
            }
            })
            .then((res) => res.json())
            .then(setUser)
    }

    return(
        <UserContext.Provider value = {{ user,users,getAllUsers,getSingleUsers}}>
            {props.children}
        </UserContext.Provider>
    )}