import React, { useContext,useEffect } from "react"
import { UserContext } from "../users/Userprovider"
import { Link, useHistory } from "react-router-dom"
import "./User.css"

// i am passing attributes from UserList {props,usercard}
export const UserCard = ({props,usercard}) => {
    const {getAllUsers} = useContext(UserContext)
    const history = useHistory()

    useEffect(() =>{
        getAllUsers()
    },[])

    return(
        <div className = "users">
            <div> FirstName : {usercard.user.first_name}</div>
            <div> LastName : {usercard.user.last_name}</div>
            <div> Email : {usercard.user.email}</div>
            <div> createdOn: {usercard.createdOn}</div>
            <div> active: {usercard.active? "yes" : "No"}</div>
        </div>
    )
}