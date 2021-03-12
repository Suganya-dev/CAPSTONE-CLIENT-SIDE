import React, { useContext } from "react"
import { FoodTableContext } from "../foodTabless/FoodtableProvider"
import { useHistory } from "react-router-dom"

// component responsible for rendering a single foodtable

export const Foodtable = ({foodtable}) => {
   
    const history = useHistory()


return(
    <div className ="foodtables">
        <div>  
        label: {foodtable.label}
        description: {foodtable.description}
        Label: {foodtable.foodType.label}
    </div>
    </div>
)
}