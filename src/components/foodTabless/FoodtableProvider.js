import React, {useState} from "react"

export const FoodTableContext = React.createContext()

export const FoodTableProvider = (props) =>{
    const[foodtable,setFoodtable] = useState({foodType:{}})
    const[foodtables,setFoodtables] = useState([])

    const getFoodtable = () =>{
        return fetch("http://localhost:8000/foodtables",{
            headers:{
                "Authorization":`Token ${localStorage.getItem ("event_user_id")}`
            }
        })
        .then(res => res.json())
        .then(setFoodtables)
    }

    const getSinglefoodTable= (id) => {
        return fetch(`http://localhost:8000/foodtables/${id}`, {
          headers: {
            "Authorization": `Token ${localStorage.getItem("event_user_id")}`,
          },
        })
          .then((res) => res.json())
          .then(setFoodtable)
      }


    const addFoodtable = (foodtable) => {
        return fetch("http://localhost:8000/foodtables",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`
            },
            body: JSON.stringify(foodtable)
        })
        .then(getFoodtable)
    }

    const removeFoodtable = foodtableId =>{
        return fetch(`http://localhost:8000/foodtables/${foodtableId}`,{
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`
            }
        })
        .then(getFoodtable)
    }

    const updateFoodtable = foodtable =>{
        return fetch(`http://localhost:8000/foodtables/${foodtable.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`
            },
            body: JSON.stringify(foodtable)
        })
            // .then(getFoodtable)
    }

    
    return (
        <FoodTableContext.Provider value = {{
            foodtable,foodtables, getFoodtable,getSinglefoodTable,addFoodtable,removeFoodtable,updateFoodtable
        }}>
            {props.children}
        </FoodTableContext.Provider>
    )}

