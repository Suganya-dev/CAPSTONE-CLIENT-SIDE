import React, { useContext } from "react"
import { FoodTableContext } from "../foodTabless/FoodtableProvider"
import { useHistory } from "react-router-dom"

// component responsible for rendering a single foodtable

export const Foodtable = ({foodtable}) => {
    const { removeFoodtable } = useContext(FoodTableContext)
    const history = useHistory()

    const confirmDelete =(id)=>{
        const d = window.confirm("Would you like to delete this?")
        if(d===true){
            removeFoodtable(id)
        }
    }


return(
    <div className ="foodtables">
        <div>   label: {foodtable.label} </div>
        <div> description: {foodtable.description} </div>
        <div>Label: {foodtable.foodType.label}</div>

        <button onClick={() => {
                history.push(`/foodtables/edit/${foodtable.id}`)
            }}>Edit
        </button>

        <button onClick={
                () => {
                    confirmDelete(foodtable.id) 
                }
            }>
                Delete
        </button>
    </div>
)
}