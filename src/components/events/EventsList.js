import React, {useContext, useEffect} from "react"
import {EventContext} from "./EventsProvider"
import { Link } from "react-router-dom"
import {Event} from "./Event"

export const EventsList =(props) =>{
    const{events,getEventsByUserId} = useContext(EventContext)

    useEffect (() =>{
        getEventsByUserId()
    },[])

    return(
        <div>
            <h3>EVENTS</h3>
            <Link to="/events/create">Create new Event</Link>
            {
              events.map(E => <Event key={E.id} event={E} props ={props}/>)  
            }
        </div>
    )
}