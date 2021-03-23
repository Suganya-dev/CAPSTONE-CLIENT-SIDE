import React, {useContext,useEffect, useState} from "react"
import {FoodTableContext} from "../foodTabless/FoodtableProvider"
import {EventContext} from "./EventsProvider"
import { Link } from "react-router-dom"

export const AddfoodtoEvents = (props) => {
    const {addfoodplanner,getEvents,deletefoodplanner,getFoodPlannerbyEventId,deleteFoodPlannerbyEventId} = useContext(EventContext)
    const {foodtables,getFoodtable} = useContext(FoodTableContext)

    // const[event,setEvent] = useState({})

    useEffect(()=>{
        getEvents()
        getFoodtable()
    },[]) 

     const addfoods = (events_id,foodTable_id) => {
         const d = window.confirm("Would you like to add this Foodtype?")
         if(d === true){
            addfoodplanner(events_id,foodTable_id)
            .then(() => {
                getFoodPlannerbyEventId(events_id)
                })
            
     }}

     const deletefoods = (events_id,foodTable_id) => {
        const d = window.confirm("would you like to delete this?")
        if(d=== true){
            deletefoodplanner(events_id,foodTable_id)
            .then(() =>{
                deleteFoodPlannerbyEventId(events_id)
            })
        }}
    
    console.log(foodtables)
    return(
        <>
            <div>

            <Link  to={{
                pathname: "/events"}}> Back to Events </Link>
                {
                foodtables.map(t=>{

                        return <p> 
                                <b>{t.label}</b>
                                <button
                    //   eventsId is not defined so i used props.match.params
                        onClick={()=>{
                          
                            addfoods(+(props.match.params.eventsId),t.id)
                        }} >
                            Add  Food To Event
                            </button> 

                            <button onClick={
                             () => {
                                deletefoods(+(props.match.params.eventsId),t.id) 
                          }}>Delete Food from Events </button>
                            </p>
                        })}
                    
            </div>
           </>
           )
        }



        
