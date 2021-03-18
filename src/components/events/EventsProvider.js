import React, { useState, useContext } from "react"


export const EventContext = React.createContext()

export const EventsProvider = (props) =>{
    const[events, setEvents] = useState([])

    const getEvents = () =>{
        return fetch("http://localhost:8000/events",{
            headers: {
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`, 
            },
        }) 
        .then((res) => res.json())
        .then(setEvents)
    }

    const getSingleEvents = (id) =>{
        return fetch (`http://localhost:8000/events/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`, 
            },
        })
        .then((res) => res.json())
        .then(setEvents)
    }

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

      const deleteEvent = (id) => {
        return fetch(`http://localhost:8000/events/${id}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Token ${localStorage.getItem("event_user_id")}`,
          },})
        .then(getEvents)
      }
      
      return(
          <EventContext.Provider value = {{
            events,getEvents,getSingleEvents,getEventsByUserId,updateEvent,addEvent,deleteEvent

          }}>
              {props.children}
          </EventContext.Provider>
      )}
