import React, { useContext, useState, useEffect } from "react"
import {FoodTableContext} from "./FoodtableProvider"
import {FoodtypeContext} from "../foodTable/FoodProvider"
import { useHistory } from "react-router-dom"

export const Foodtableform = (props) => {
  const{foodtable,foodtables,getFoodtable,addFoodtable,updateFoodtable} = useContext(FoodTableContext)
  const{foodtypes,getFoodtype} = useContext(FoodtypeContext)
  const history = useHistory()

  const editMode = props.match.params.hasOwnProperty("foodtableId")

  const[currentFoodtable, setcurrentFoodtable] = useState({
      label:"",
      description: "",
      foodType: 0
  })

  const getFoodtablesInEditmode =() => {
    const foodtableId = parseInt(props.match.params.foodtableId)
    const selectedFoodtable = foodtables.find(a => a.id === foodtableId) || {}
    setcurrentFoodtable(selectedFoodtable)
  }
  useEffect(() => {
    getFoodtype()
  }, [])

  useEffect(() =>{
    getFoodtablesInEditmode()
},[foodtables])

const changeFoodtableState = (Event) => {
  const newFoodtablestate = Object.assign({}, currentFoodtable)
  newFoodtablestate[Event.target.name] = Event.target.value
  setcurrentFoodtable(newFoodtablestate)
}

const constructNewFoodtable = () => {
  if(editMode === false){
    addFoodtable(currentFoodtable)
    .then(() => props.history.push("/foodtables"))
  }else{
    updateFoodtable({
      id: parseInt(props.match.params.foodtableId),
      label: currentFoodtable.label,
      description: currentFoodtable.description,
      foodType: currentFoodtable.foodType
    })
    .then(() => props.history.push("/foodtable"))
  }}

  return (
    <form className="PostForm">
      <h2 className="PostForm__title">Post</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Label: </label>
          <input
            type="text"
            name="label"
            id="label"
            required
            autoFocus
            className="form-control"
            defaultValue={currentFoodtable.label}
            onChange={changeFoodtableState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            id="description"
            required
            className="form-control"
            defaultValue={currentFoodtable.description}
            onChange={changeFoodtableState}
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="form-group">
          <label htmlFor="foodType">Foodtype: </label>
          {/* foodtypes&& this will wait untill data comes and then it renders */}
          {foodtypes&&
            <select
            type="text"
            name="foodType_id"
            id="foodType_id"
            required
            className="form-control"
            defaultValue={1}
            onChange={changeFoodtableState}
            >
                {/* (paranthesis means single line function, no return) */}
                {/* {curly braces multi line fn, needs return } */}
                {/* drop down list(mapping) */}
                <option value = "0">Please select the Foodtype</option>
          { foodtypes.map ((fT) => (
            <option key={fT.id} value ={console.log(fT.id)} >
                  {fT.label}
              </option>
            ))
          } 
        
        </select> }
        </div>
      </fieldset>

      <button type="submit"  onClick={evt => {
                evt.preventDefault()
                constructNewFoodtable()
            }}>Submit</button>
      </form>
  )    
}






