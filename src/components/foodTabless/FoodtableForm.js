import React, { useContext, useRef, useState, useEffect } from "react"
import { FoodTableContext } from "./FoodtableProvider"
import { FoodtypeContext } from "../foodTable/FoodProvider"

// This module renders the create  foodtable form and edit foodtable form
export const Foodtableform = (props) =>{
    const[foodtable,setFoodtable] = useState([])

    const{foodtable,getFoodtable,addFoodtable,updateFoodtable} = useContext(FoodTableContext)
    const{foodtypes,getFoodtype} = useContext(FoodtypeContext)

    const editMode =props.match.params.hasOwnProperty("foodtableId")

    const label = useRef(null)
    const description = useRef(null)
    
}
