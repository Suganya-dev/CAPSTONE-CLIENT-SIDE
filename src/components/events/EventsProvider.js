import React, { useState, useContext } from "react"
import { Foodtable } from "../foodTabless/Foodtable"

//This module is responsible for all methods for fetching foodtables from server
export const EventContext = React.createContext()

export const EventsProvider = (props) =>{
    const[events, setEvents] = useState([])

 //method to get foodtabless from server
    const getEvents = () =>{
        return fetch("http://localhost:8000/events",{
            headers: {
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`, 
            },
        }) 
        .then((res) => res.json())
        .then(setEvents)
    }

    //method to get foodtables by the id from server
    const getSingleEvents = (id) =>{
        return fetch (`http://localhost:8000/events/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`, 
            },
        })
        .then((res) => res.json())
        .then(setEvents)
    }

     //method to get foodtabless by the user id that created the foodtables from server
    const getEventsByUserId = (userId) => {
        userId = localStorage.getItem("event_user_id")
        return fetch(`http://localhost:8000/events?user_id=${userId}`, {
          headers: {
            "Authorization": `Token ${localStorage.getItem("event_user_id")}`,
          },
        })
          .then((res) => res.json())
          .then(setEvents)
      }

       //method to edit foodtabless on the server
    const updateEvent = (event) =>{
        return fetch(`http://localhost:8000/events/${event.id}`, {
            method: "PUT",
            headers: {
              "Authorization": `Token ${localStorage.getItem("event_user_id")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(event),
        }).then(getEvents)
      }
 
        //method to create a foodtables to add to the server
      const addEvent = (event) => {
        return fetch("http://localhost:8000/events",{
        
          method: "POST",
          headers: {
            "Authorization": `Token ${localStorage.getItem("event_user_id")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(event),
        }).then(getEvents)
      }

       //method to delete foodtables from server
      const deleteEvent = (id) => {
        return fetch(`http://localhost:8000/events/${id}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Token ${localStorage.getItem("event_user_id")}`,
          },})
        .then(getEvents)
      }

      // method to add foodplanner to events
      const addfoodplanner = (EventsId,FoodtableId) => {
        const foodObj = {
           Events_id : EventsId,
           foodtable_id : FoodtableId
        }
        return fetch (`http://localhost:8000/events/${EventsId}/foodplanner`,{
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            Authorization : `Token ${localStorage.getItem("event_user_id")}`,
            },
            body: JSON.stringify(foodObj)
        })
        .then(getSingleEvents(EventsId))
      }
      
      // method to delete foodplanner from events

      const deletefoodplanner = (EventsId,FoodtableId) => {
        return fetch (`http://localhost:8000/events/${EventsId}/foodplanner`,{
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            Authorization : `Token ${localStorage.getItem("event_user_id")}`,
            },
            body: JSON.stringify(FoodtableId)
          })
          .then(getSingleEvents(EventsId))
        }
        
      return(
          <EventContext.Provider value = {{
            events,getEvents,getSingleEvents,addfoodplanner,deletefoodplanner,getEventsByUserId,updateEvent,addEvent,deleteEvent

          }}>
              {props.children}
          </EventContext.Provider>
      )}
