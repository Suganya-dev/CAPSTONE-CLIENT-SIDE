import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import './Post.css'

export const Event = ({event,props}) => {
    if(localStorage.getItem("event_user_id")){
        return(

            <div className ="Events">
                <div>eventUser:{event.user_id}</div>
                <div>eventName:{event.eventName}</div>
                <div>eventdate:{event.eventdate}</div>
                <div>venue:{event.venue}</div>
                <div>numOfGuests:{event.numOfGuests}</div>
                <div>content:{event.content}</div>
                <div>approved:{event.approved}</div>
                <div>category:{event.category.label}</div>

                <Link to={{
                    pathname: `/events/add_events/${event.id}`,
                    state:{chosenPost: post}
                }}>Add Tags</Link>
            </div>
        )
    }else{
        return(
            <div>
                You haven't made any Events.
            </div>
        )
    }
}