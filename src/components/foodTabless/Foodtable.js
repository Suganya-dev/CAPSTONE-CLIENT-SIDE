import React, { useContext } from "react"
import { FoodTableContext } from "../foodTabless/FoodtableProvider"
import { useHistory } from "react-router-dom"

// component responsible for rendering a single foodtable

export const Foodtable = ({foodtable}) => {
    const {removeFoodtable} = useContext(FoodTableContext)
    const history = useHistory()


const confirmDelete = (id) =>{
    const d = window.confirm("Would like to DELETE the Foodtable?")
    if(d === true) {
        removeFoodtable(foodtable.id)
    }
}

return(
    <div>Label: {foodtable.foodType.label}
    <button onClick={()=>{confirmDelete()}}>Delete Foodtype From FoodTable</button>
    </div>
)
}