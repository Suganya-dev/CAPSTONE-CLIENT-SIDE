import React, { useContext, useEffect, useState } from "react";
import {FoodtypeContext} from "./FoodProvider"
import "./Foodtypes.css"

export const FoodtypeForm = (props) => {
    const {foodtypes, getFoodtype,addFoodtype,updateFoodtype} = useContext(FoodtypeContext)
    const [foodtype, setFoodtype] = useState([])

    const editMode = props.match.params.hasOwnProperty("foodtypeId")

    const handleControlledInputChange = (event) =>{
        const newFoodtype =  Object.assign({}, foodtype)
        newFoodtype[event.target.name] = event.target.value
        setFoodtype(newFoodtype)
        // console.log(foodtype)
    }

    const getFoodtypeInEditMode = () =>{
        if(editMode){
            const foodtypeId = parseInt(props.match.params.foodtypeId)
            const selectedFoodtype = foodtypes.find(f => f.id === foodtypeId) || {}
            setFoodtype(selectedFoodtype)
        }
    }
  
    useEffect(() =>{
        getFoodtype()
    },[])

    useEffect(() =>{
        getFoodtypeInEditMode()
    },[foodtypes])

    const constructNewFoodtype = () =>{
        if(editMode){
            updateFoodtype({
            id: foodtype.id,
            label: foodtype.foodTypes
            })
//  keyerror = whatever i am giving in name field in fieldset should use same key value
            .then(() => props.history.push("/foodtypes"))
        }else{
            addFoodtype({
                label :foodtype.foodTypes
            })
             .then(() => props.history.push("/foodtypes"))
            
        }
    }
    // console.log(foodType)
    return(
        <form className="foodtypeForm">
        <h2 className="foodtypeForm__title">{editMode ? "Update Foodtype" : "Add Foodtype"}</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="label">Create a new Foodtype</label>
                <input type="text" name="foodTypes" required autoFocus className="form-control"
                    proptype="varchar"
                    placeholder="Add text"
                    defaultValue={foodtype.label}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <section className = "button"> 
        <button type="submit"
                    onClick={evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewFoodtype()
                    }}
                    className="btn btn-primary">
                    {editMode ? "Save Update" : "Save"}
                </button>
                <button onClick={() => {
                    props.history.push(`/foodtypes`)
                }}>Back
                </button>
                </section>
            </form>
    )}