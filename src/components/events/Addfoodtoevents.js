import React, {useContext, useRef, useEffect, useState} from "react"
import {FoodtypeContext} from "../foodTable/FoodProvider"
import {EventContext} from "./EventsProvider"
import { Link } from "react-router-dom"

export const AddfoodtoEvents = (props) => {
    const {getSingleEvents,events} = useContext(EventContext)
    const {foodtable,getFoodtable} = useContext(FoodtypeContext)

    useEffect(()=>{
        getFoodtable()
        .then(getSingleEvents(parseInt(props.match.params.eventsId)))
        },[]) 

    const FoodEventLabel = (events.foodtable? events.foodtable.map(pt=>{
        return pt.id
    }) : [])

    return(
        <form>
            <Link  to={{
                    pathname: `/posts/${events.id}`}}>Back To Events</Link>
            <fieldset>
                <div>
                    {
                        tags.map((t)=>{
                            if(!FoodEventLabel.find(pt=>parseInt(pt) === parseInt(t.id)))
                          return(
                              <div>{t.label}<button onClick={()=>{addPostTag(post.id, {tagId:t.id})}}>Add  Food To Events</button></div>
                          )
                        }
                        )
                    }
                </div>
            </fieldset>
        </form>
    )
    }
}