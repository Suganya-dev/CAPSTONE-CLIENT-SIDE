import React, { useContext } from "react"
import { FoodtypeContext } from "../foodTable/FoodProvider"
import { useHistory } from "react-router-dom"
import "./Foodtypes.css"

// component responsible for rendering a single foodtype

export const Foodtype = ({foodtypes}) =>{
    const {removeFoodtype} = useContext(FoodtypeContext)
    const history = useHistory()

    const confirmDelete = (id) =>{
        const d = window.confirm("Would like to DELETE the Foodtype?")
        if(d === true) {
            removeFoodtype(id)
        }
    }

    return(<section className ="foodtypes">
    <div className = "foodtypes__label">
        {foodtypes.label}
    </div>
    <section className ="button"> 
    <button onClick ={
        () => {
            confirmDelete(foodtypes.id)
        }
    }>
        Delete 
    </button>
    <button onClick ={ () =>{
        history.push(`/foodtypes/edit/${foodtypes.id}`)
    }} >
        Edit
    </button>
    </section>
    </section>
    )}



   
