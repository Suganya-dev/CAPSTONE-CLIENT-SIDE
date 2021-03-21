import React, { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./Userprovider"
import {Usercard} from "./Usercard"

export const UserList = (props) =>{
    // console.log(props)
    const{users,getAllUsers} = useContext(UserContext)

    useEffect(() => {
        getAllUsers()
    },[])

    return(
        <>
        <div className ="Users"> 
        <h2>Users List</h2>
        
            {users.map( U => {
               return <Usercard key={U.id}
               usercard = {U} props={props}
               />
            })}
            </div>
        </>
    )}