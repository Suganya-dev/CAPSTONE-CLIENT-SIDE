import React, { useContext, useEffect } from "react"
import { FoodtypeContext } from "../foodTable/FoodProvider"
import {Foodtype} from "./Food"

export const FoodList =(props) =>{
    const{foodtypes ,getFoodtype} = useContext(FoodtypeContext)

    useEffect(() =>{
        getFoodtype()
    },[])
    console.log(foodtypes)
    return (
        <>
          <div className ="row">
            <h2>LIST OF FOODTYPES</h2>
            <button onClick = {() => {
                props.history.push(`/foodtypes/create`)
            }}> Create a new foodtype </button>

            <div className = "column">
                {foodtypes.map(ft =>{
                return <Foodtype key={ft.id}
                foodtypes={ft} props={props}
                />

                })}
            </div>
          </div>
          </>
    )
}