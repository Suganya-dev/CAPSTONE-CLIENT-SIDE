import React, {useContext, useRef, useEffect, useState} from "react"
import {FoodTableContext} from "../foodTabless/FoodtableProvider"
import {EventContext} from "./EventsProvider"
import { Link } from "react-router-dom"

export const AddfoodtoEvents = (props) => {
    const {getSingleEvents,events,addfoodplanner} = useContext(EventContext)
    const {foodtables,getFoodtable} = useContext(FoodTableContext)

    useEffect(()=>{
        getFoodtable()
    },[]) 

    
    // console.log(foodtables)
    return(
        <>
            <Link  to={{
                    pathname:"/events"}} >Back To Events</Link>
            <fieldset>
                <div>
                    {
                        foodtables.map((t)=>{
                          return(
                              <div>{t.label}<button 
                              onClick={()=>{addfoodplanner(events.id, t.id)}}>
                              Add  Food To Events</button></div>
                          )
                        }
                        )
                    }
                </div>
            </fieldset>
        </>
    )}
