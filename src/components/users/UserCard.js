import React, { useContext,useEffect } from "react"
import { UserContext } from "../users/Userprovider"
import { Link, useHistory } from "react-router-dom"

export const UserCard = (users) => {
    const {getSingleUsers} = useContext(UserContext)
    const history = useHistory()

    useEffect(() =>{
        getSingleUsers()
    },[])

    return(
        <div className = "users">
            {/* <div> user : {users.user.first_name}</div> */}
            <div> createdOn: {users.createdOn}</div>
            <div> active: {users.active}</div>
        </div>
    )
}