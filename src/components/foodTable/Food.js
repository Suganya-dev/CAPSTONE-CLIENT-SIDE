import React, { useContext } from "react"
import { FoodtypeContext } from "../foodTable/FoodProvider"
import { useHistory } from "react-router-dom"

// component responsible for rendering a single foodtype

export const Foodtype = ({foodtype}) =>{
    const {removeFoodtype} = useContext(FoodtypeContext)
    const history = useHistory()

    const confirmDelete = (id) =>{
        const d = window.confirm("Would like to DELETE the Foodtype?")
        if(d === true) {
            removeFoodtype(id)
        }
    }

    return(<section className ="foodtype">
    <div className = "foodtype __label">
        {foodtype.foodTypes}
    </div>
    <button onClick ={
        () => {
            confirmDelete(foodtype.id)
        }
    }>
        Delete 
    </button>
    <button onClick ={ () =>{
        history.push(`/foodtypes/edit/${foodtype.id}`)
    }} >
        Edit
    </button>
    </section>
    )}



   
