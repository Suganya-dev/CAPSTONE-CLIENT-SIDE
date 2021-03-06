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
            <h1>"WELCOME TO BIG EVENTS"</h1>
            <h2>  βTo achieve great things, two things are needed: a plan, and not quite enough time.β 
                           β Leonard Bernstein</h2>
            <h3>MY EVENTS</h3>
            <button> 
            <Link to="/events/create">Create your Event</Link>
            </button>
            {
              events.map(E => <Event key={E.id} event={E} props ={props}/>)  
            }
        </div>
    )
}