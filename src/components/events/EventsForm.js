import React, { useContext, useState, useEffect } from "react"
import { EventContext } from "./EventsProvider.js"
import { CategoryContext } from "../categories/CategoryProvider"
import { useHistory } from "react-router-dom"
  
export const EventForm = (props) =>{
    const{events,addEvent,updateEvent} = useContext(EventContext)
    const{categories,getCategories} = useContext(CategoryContext)
    const history = useHistory()

    const editMode = props.match.params.hasOwnProperty("eventsId")

    const[currentEvent, setcurrentEvent] = useState({
        eventUser:"",
        eventName: "",
        eventdate:"",
        venue:"",
        numOfGuests:"",
        content:"",
        approved:"",
        category:0,
    })

   const getEventsInEditmode = () =>{
       const eventsId = parseInt(props.match.params.eventsId)
       const selectedEvents = events.find(e => e.id === eventsId) || {}
       setcurrentEvent(selectedEvents)
   }
 
   useEffect(() => {
    getCategories()
  }, [])

    useEffect(() =>{
        getEventsInEditmode()
    },[events])

    const OnControlledChangeState = (Event) => {
        const newEventState = Object.assign({}, currentEvent)
        newEventState[Event.target.name] = Event.target.value
        setcurrentEvent(newEventState)
    }

    // const editMode = parseInt(props.match.params.eventsId)
    const constructNewEvent = () =>{
        if(editMode === false){
            addEvent(currentEvent)
            .then(() => props.history.push("/events"))

        }else{
            updateEvent({
                id : parseInt(props.match.params.eventsId),
                eventUser:currentEvent.eventUser,
                eventName:currentEvent.eventName,
                eventdate:currentEvent.eventdate,
                venue:currentEvent.venue,
                numOfGuests:currentEvent.numOfGuests,
                content:currentEvent.content,
                approved:currentEvent.approved,
                category:parseInt(currentEvent.category)
            })
            
            .then(() => props.history.push("/events"))
        }}
        
        console.log(editMode)
        
        return(
            <form className = "EventForm">
            <h2 className="EventForm__Events">EVENTS</h2>
            <fieldset>
                <div className ="form-group">
                    <label htmlFor ="eventname">Eventname:</label>
                    <input 
                      type="text"
                      name="eventName"
                      id="eventName"
                      required autoFocus
                      className ="form-control"
                      defaultValue = {currentEvent.eventName}
                      onChange ={OnControlledChangeState}
                      />
                </div>
            </fieldset>
            <fieldset>
                <div className ="form-group">
                    <label htmlFor ="eventname">Eventdate:</label>
                    <input 
                      type="date"
                      name="eventdate"
                      id="eventdate"
                      required autoFocus
                      className ="form-control"
                      defaultValue = {currentEvent.eventdate}
                      onChange ={OnControlledChangeState}
                      />
                </div>
            </fieldset>
            <fieldset>
                <div className ="form-group">
                    <label htmlFor ="eventname">Venue:</label>
                    <input 
                      type="text"
                      name="venue"
                      id="venue"
                      required autoFocus
                      className ="form-control"
                      defaultValue = {currentEvent.venue}
                      onChange ={OnControlledChangeState}
                      />
                </div>
            </fieldset>
            <fieldset>
                <div className ="form-group">
                    <label htmlFor ="eventname">NumOfGuests:</label>
                    <input 
                      type="text"
                      name="numOfGuests"
                      id="numOfGuests"
                      required autoFocus
                      className ="form-control"
                      defaultValue = {currentEvent.numOfGuests}
                      onChange ={OnControlledChangeState}
                      />
                </div>
            </fieldset>
            <fieldset>
                <div className ="form-group">
                    <label htmlFor ="eventname">Content:</label>
                    <input 
                      type="text"
                      name="content"
                      id="content"
                      required autoFocus
                      className ="form-control"
                      defaultValue = {currentEvent.content}
                      onChange ={OnControlledChangeState}
                      />
                </div>
            </fieldset>
            <fieldset>
                <div className ="form-group">
                    <label htmlFor ="eventname">Category:</label>
                    <select 
                      type="text"
                      name="category"
                      id="category"
                      required autoFocus
                      className ="form-control"
                      defaultValue = {currentEvent.category}
                      onChange ={OnControlledChangeState}
                      >
                        <option value ="0">Please select the Category</option>
                        {categories.map ((cT) => (
                            <option key={cT.id} value={cT.id}>
                                {cT.label}
                            </option>
                        ))}
                        </select>

                </div>
            </fieldset>

            <button type="submit"  onClick={evt => {
                evt.preventDefault()
                constructNewEvent()
            }}>Submit</button>

            </form>
        )}