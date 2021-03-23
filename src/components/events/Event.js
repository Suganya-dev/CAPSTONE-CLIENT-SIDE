import React, { useContext, useEffect, useState } from "react"
import { Link,useHistory } from "react-router-dom"
import {EventContext} from "./EventsProvider"
import './Events.css'
import { FoodTableContext, FoodTableProvider } from "../foodTabless/FoodtableProvider"

export const Event = ({event,props}) => {
    const {deleteEvent,getFoodPlannerbyEventId} = useContext(EventContext)
    const {getOnefoodTable,foodtabAle} = useContext(FoodTableContext)
    const history = useHistory()

    const ConfirmDelete = (id) =>{
        const d = window.confirm("would you like to delete this?")
        if(d=== true){
            deleteEvent(id)
        }}

        useEffect(() => {
            event.foodtable =[]
            getFoodPlannerbyEventId(event.id)
            .then(res => {
                console.log(res)
                res.map(fP =>{
                    getOnefoodTable(fP.foodTable.id)
                    .then(fT => {
                        event.foodtable.push(fT)
                        })
                })
            })
        },[])

        // console.log(props)
        // &&event.foodtable)

    if(localStorage.getItem("event_user_id")){
        // console.log(event)
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
                {/* just like ternary conditional rendering */}
                {/* {event.foodtable && <div>Foodtypes:{event.foodtable.label}</div>} */} 
                <div>Foodtypes:
                {event.foodplanners && event.foodplanners.map(fT => {
                   return <div> {fT.foodTable.label}</div>
                })} </div>
                 
                <button> 
                <Link to={{
                    pathname: `/events/edit/${event.id}`,
                    // state:{chosenPost: post}
                }}>Edit Events</Link> </button>

                <button onClick={
                () => {
                    ConfirmDelete(event.id) 
                }}>Delete Events </button>
            </div>
            
        )}
        else{
        return(
            <div>
                You haven't made any Events.
            </div>
        )
    }
}