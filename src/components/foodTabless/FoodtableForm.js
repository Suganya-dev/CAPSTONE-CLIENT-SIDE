import React, { useContext,useState, useEffect } from "react"
import { FoodTableContext } from "./FoodtableProvider"
import { FoodtypeContext } from "../foodTable/FoodProvider"
import { useHistory } from "react-router-dom"

// This module renders the create  foodtable form and edit foodtable form
export const Foodtableform = (props) =>{
    const history = useHistory()
    
    const{foodtable,getFoodtable,addFoodtable,updateFoodtable} = useContext(FoodTableContext)
    const{foodtypes,getFoodtype} = useContext(FoodtypeContext)
    //  console.log(foodtypes)

     const editMode = props.match.params.hasOwnProperty("foodtablesId")

    const[foodtables,setFoodtables] = useState({
        label: "",
        description: "",
        foodType: 0,
    })

    const getFoodtableInEditMode = () => {
    
        const foodtablesId = parseInt(props.match.params.foodtablesId)
        const selectedFoodtable = foodtable.find(a => a.id === foodtablesId) || {}
        setFoodtables(selectedFoodtable)
    }

    useEffect(() => {
        getFoodtype()
      }, [])

    useEffect(() =>{
        getFoodtableInEditMode()
    },[foodtable])

        /*
  Update the `Foodtable` state variable every time
  the state of one of the input fields changes.
  */
  const changeFoodtableState = (domEvent) => {
    const newFoodtableState = Object.assign({}, foodtables)
    newFoodtableState[domEvent.target.name] = domEvent.target.value
    setFoodtables(newFoodtableState)
  }

  const constructNewFoodtable = () =>{
    const editMode = parseInt(props.match.params.foodtableId)
    if(!editMode){
    addFoodtable(foodtables)
    .then(()=>props.history.push("/foodtables"))
    }else{
        updateFoodtable({
            label:foodtables.label,
            description:foodtables.description,
            // foodtype:foodtables.foodtypes.label
        })

        .then(() => props.history.push(`/foodtables/edit/${foodtable.id}`))

    }}

// i got this path from props.
    console.log(props)
    const Foodlabel = props.location.state.choosentable
    // console.log(Foodlabel)

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
            defaultValue={Foodlabel.label}
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
            defaultValue={Foodlabel.description}
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
            name="foodType"
            id="foodType"
            required
            className="form-control"
            defaultValue={1}
            onChange={changeFoodtableState}
            >
                {/* (paranthesis means single line function, no return) */}
                {/* {curly braces multi line fn, needs return } */}
                {/* drop down list(mapping) */}
          { foodtypes.map ((fT) => (
            //   {console.log(fT.label)}
              <option key={fT.id} value ={fT.id}>
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
