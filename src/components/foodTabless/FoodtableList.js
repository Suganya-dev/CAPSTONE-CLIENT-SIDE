import React, {useContext, useEffect, useState} from "react"
import { useHistory } from "react-router-dom"
import {FoodTableContext} from "./FoodtableProvider"
import {Foodtable} from "./Foodtable"

export const FoodTable = (props) =>{
    const{foodtable, getFoodtable} = useContext(FoodTableContext)
    const history = useHistory()

    useEffect(() =>{
        getFoodtable()
    },[])

    return(
        <>
        <div className ="row">
            <h1>FOODTABLES</h1>
            <button onClick = {() => {
                props.history.push(`/foodtables/create`)
            }}> Create a new foodtable </button>

        <div className = "column">
                {foodtable.map(ft =>{
                return <Foodtable key={ft.id}
                foodtable={ft} props={props}
                />
                })}
            </div>
            </div>
            </>
    )

}