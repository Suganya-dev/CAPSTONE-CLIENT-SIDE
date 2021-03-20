import React, { useContext, useEffect } from "react"
import { FoodtypeContext } from "../foodTable/FoodProvider"
import {Foodtype} from "./Food"
import "./Foodtypes.css"

export const FoodList =(props) =>{
    const{foodtypes ,getFoodtype} = useContext(FoodtypeContext)

    useEffect(() =>{
        getFoodtype()
    },[])
    console.log(foodtypes)
    return (
        <>
          <div className ="foodtypes">
            <h2>LIST OF FOODTYPES</h2>

            <section className ="button"> 
            <button onClick = {() => {
                props.history.push(`/foodtypes/create`)
            }}> Create a new foodtype </button>
            </section>

            <div className = "foodtypes">
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