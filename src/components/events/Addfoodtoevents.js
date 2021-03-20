import React, {useContext,useEffect} from "react"
import {FoodTableContext} from "../foodTabless/FoodtableProvider"
import {EventContext} from "./EventsProvider"
import { Link } from "react-router-dom"

export const AddfoodtoEvents = (props) => {
    const {addfoodplanner,getEvents} = useContext(EventContext)
    const {foodtables,getFoodtable} = useContext(FoodTableContext)

    useEffect(()=>{
        getFoodtable()
    },[]) 

    
    console.log(foodtables)
    return(
        <>
                <div>
                    {
                        foodtables.map(t=>{
                            
                            return <p> 
                                    {t.label}
                                 <button
                          onClick={()=>{addfoodplanner(+(props.match.params.eventsId),+(t.id));
                            getEvents();}} >
                                Add  Food To Event
                              </button> 
                              </p>
                             
                            })}
                        
                </div>
           </>
           )
        }
        
        //   <div>
        //   <button 
        //   eventsId is not defined so i used props.match.params
        //    Add  Food To Event 
        //   </button></div>
        {/* <button> 
        <Link  to={{
                pathname:"/events"}} >Back To Events
        </Link>
        </button>
       */}