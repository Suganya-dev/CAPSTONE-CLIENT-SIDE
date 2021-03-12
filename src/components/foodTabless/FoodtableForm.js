import React, { useContext, useRef, useState, useEffect } from "react"
import { FoodTableContext } from "./FoodtableProvider"
import { FoodtypeContext } from "../foodTable/FoodProvider"
import { useHistory } from "react-router-dom"

// This module renders the create  foodtable form and edit foodtable form
export const Foodtableform = (props) =>{
    const history = useHistory()
    
    const{foodtable,getFoodtable,getSinglefoodTable,addFoodtable,updateFoodtable} = useContext(FoodTableContext)
    const{foodtypes,getFoodtype} = useContext(FoodtypeContext)
    
    const[foodtable,setFoodtable] = useState({
        label: "",
        description: "",
        foodType: 0,
    })

    useEffect(() => {
        if("foodtableId" in props.match.params){
            getSinglefoodTable(props.match.params.foodtableId).then((fT =>{
                setFoodtable({
                    label: fT.label,
                    description: fT.description,
                    foodType: fT.foodType,
                })
            }))
        }
    }, [props.match.params.foodtableId])

    useEffect(() => {
        getFoodtype()
      }, [])

        /*
  Update the `Foodtable` state variable every time
  the state of one of the input fields changes.
  */
  const changeFoodtableState = (domEvent) => {
    const newFoodtableState = Object.assign({}, foodtable)
    newFoodtableState[domEvent.target.name] = domEvent.target.value
    setFoodtable(newFoodtableState)
  }

  return (
    <form className="PostForm">
      <h2 className="PostForm__title">Post</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Label: </label>
          <input
            type="text"
            name="label"
            required
            autoFocus
            className="form-control"
            value={fT.label}
            onChange={changeFoodtableState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="content">Description: </label>
          <input
            type="text"
            name="description"
            required
            className="form-control"
            value={ fT.description}
            onChange={changeFoodtableState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="content">Foodtype: </label>
          <input
            type="text"
            name="foodType"
            required
            className="form-control"
            value={fT.foodType}
            onChange={changeFoodtableState}
          />
          { foodtypes.map ((fT) => {
              <option key={fT.id} value ={fT.id}>
                  {fT.label}
              </option>

          })
        }
        </div>
      </fieldset>
      </form>
  )    
}
