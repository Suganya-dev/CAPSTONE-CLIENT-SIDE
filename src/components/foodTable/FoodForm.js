import React, { useContext, useEffect, useState } from "react";
import {FoodtypeContext} from "./FoodProvider"

export const FoodtypeForm = (props) => {
    const {foodtypes, getFoodtype,addFoodtype,removeFoodtype,updateFoodtype} = useContext(FoodtypeContext)
    const [foodtype, setFoodtype] = useState([])

    const editMode = props.match.params.hasOwnProperty("foodtypeId")

    const handleControlledInputChange = (event) =>{
        const newFoodtype =  Object.assign({}, foodtype)
        newFoodtype[event.target.name] = event.target.value
        setFoodtype(newFoodtype)
    }

    const getFoodtypeInEditMode = () =>{
        if(editMode){
            const foodtypeId = parseInt(props.match.params.foodtypeId)
            selectedFoodtype = foodtypes.find(f => f.id === foodtypeId) || {}
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
            foodTypes: foodtype.foodTypes
            })

            .then(() => props.history.push("/foodtypes"))
        }else{
            addFoodtype({
                foodTypes :foodtype.foodTypes
            })
             .then(() => props.history.push("/foodtypes"))
            
        }
    }

    return(
        <form className="foodtypeForm">
        <h2 className="foodtypeForm__title">{editMode ? "Update Foodtype" : "Add Foodtype"}</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="label">Create a new Foodtype</label>
                <input type="text" name="foodTypes" required autoFocus className="form-control"
                    proptype="varchar"
                    placeholder="Add text"
                    defaultValue={foodtype.foodTypes}
                    onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
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
            </form>
    )}