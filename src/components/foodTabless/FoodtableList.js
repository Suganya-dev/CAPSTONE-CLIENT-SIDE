import React, {useContext, useEffect, useState} from "react"
import { useHistory } from "react-router-dom"
import {FoodTableContext} from "./FoodtableProvider"
import {Foodtable} from "./Foodtable"
import "./Foodtable.css"

export const FoodTable = (props) =>{
    const{foodtables, getFoodtable} = useContext(FoodTableContext)
    const history = useHistory()

    useEffect(() =>{
        getFoodtable()
    },[])

    // renders jsx first html element
    // second useeffect dependancy array
    // Then renders getfoodtable
    

    return(
        <>
        <div className ="foodtables">
            <h2>FOODTABLES</h2>

            <section className ="button"> 
            <button onClick = {() => {
                props.history.push(`/foodtables/create`)
            }}> Create a new foodtable </button>
            </section>

        <div className = "foodtables">
                {foodtables.map(ft =>{
                return <Foodtable key={ft.id}
                foodtable={ft} props={props}
                />
                })}
            </div>
            </div>
            </>
    )

}