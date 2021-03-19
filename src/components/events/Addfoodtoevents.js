import React, {useContext, useRef, useEffect, useState} from "react"
import {FoodTableContext} from "../foodTabless/FoodtableProvider"
import {EventContext} from "./EventsProvider"
import { Link } from "react-router-dom"

export const AddfoodtoEvents = (props) => {
    const {addfoodplanner} = useContext(EventContext)
    const {foodtables,getFoodtable} = useContext(FoodTableContext)

    useEffect(()=>{
        getFoodtable()
    },[]) 

    
    // console.log(foodtables)
    return(
        <>
            <Link  to={{
                    pathname:"/events"}} >Back To Events
            </Link>
            <fieldset>
                <div>
                    {
                        foodtables.map((t)=>{
                          return(
                              <div>{t.label}<button 
                            //   eventsId is not defined so i used props.match.params
                              onClick={()=>{addfoodplanner(props.match.params.eventsId, t.id)}}>
                              Add  Food To Events</button></div>
                          )
                        }
                        )
                    }
                </div>
            </fieldset>
        </>
    )}
