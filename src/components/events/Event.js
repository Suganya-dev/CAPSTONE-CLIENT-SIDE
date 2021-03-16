import React, { useContext, useState } from "react"
import { Link,useHistory } from "react-router-dom"
import {EventContext} from "./EventsProvider"
import './Events.css'

export const Event = ({event,props}) => {
    const {deleteEvent} = useContext(EventContext)
    const history = useHistory()

    const ConfirmDelete = (id) =>{
        const d = window.confirm("would you like to delete this?")
        if(d=== true){
            deleteEvent(id)
        }}

        console.log(props)

    if(localStorage.getItem("event_user_id")){

        return(

            <div className ="Events">
                <div>eventUser:{event.eventUser.user.id}</div>
                <div>eventName:{event.eventName}</div>
                <div>eventdate:{event.eventdate}</div>
                <div>venue:{event.venue}</div>
                <div>numOfGuests:{event.numOfGuests}</div>
                <div>content:{event.content}</div>
                <div>approved:True</div>
                <div>category:{event.category.label}</div>

                <Link to={{
                    pathname: `/events/edit/${event.id}`,
                    // state:{chosenPost: post}
                }}>Edit Events</Link>

                <button onClick={
                () => {
                    ConfirmDelete(event.id) 
                }}>Delete </button>
            </div>
            
        )}else{
        return(
            <div>
                You haven't made any Events.
            </div>
        )
    }
}