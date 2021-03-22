import React, {useContext,useEffect, useState} from "react"
import {FoodTableContext} from "../foodTabless/FoodtableProvider"
import {EventContext} from "./EventsProvider"
import { Link } from "react-router-dom"

export const AddfoodtoEvents = (props) => {
    const {addfoodplanner,getEvents,events,getFoodPlannerbyEventId} = useContext(EventContext)
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
         }
     }
    
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
                          
                            addfoods(props.match.params.eventsId,t.id)
                        }} >
                            Add  Food To Event
                            </button> 
                            </p>
                            
                        })}
                    
            </div>
           </>
           )
        }


        // <button
        // //   eventsId is not defined so i used props.match.params
        //     onClick={()=>{addfoodplanner(+(props.match.params.eventsId),+(t.id));
        //     getEvents();}} >
        //         Add  Food To Event
        //         </button> 
        
