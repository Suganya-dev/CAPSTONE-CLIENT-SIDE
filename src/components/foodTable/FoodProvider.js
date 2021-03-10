import React, { useState } from "react"

export const FoodtypeContext = React.createContext()

export const FoodtableProvider = (props) =>{
    const[foodtypes, setFoodtypes] = useState([])

    const getFoodtype =() =>{
        return fetch("http://localhost:8000/foodtypes",{
            headers:{
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`
            }
        })
        .then(res =>res.json())
        .then(setFoodtypes)
    }

    const addFoodtype = (foodtype) =>{
        return fetch("http://localhost:8000/foodtypes",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`
            },
            body: JSON.stringify(foodtype)
        })
        .then(getFoodtype)
    }

    const removeFoodtype = (foodtypeId) =>{
        return fetch(`http://localhost:8000/foodtypes/${foodtypeId}`,{
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`
            }
        })
    }

    const updateFoodtype = (foodtype) =>{
        return fetch(`http://localhost:8000/foodtypes/${foodtype.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`
            },
            body: JSON.stringify(foodtype)
        })
            .then(getFoodtype)
    }

    return (
        <FoodtypeContext.Provider value = {{
            foodtypes, getFoodtype,addFoodtype,removeFoodtype,updateFoodtype
        }}>
            {props.children}
        </FoodtypeContext.Provider>
    )}

