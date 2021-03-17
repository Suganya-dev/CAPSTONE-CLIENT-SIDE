import React, { useContext,useState, useEffect } from "react"
import { FoodTableContext } from "./FoodtableProvider"
import { FoodtypeContext } from "../foodTable/FoodProvider"
import { useHistory } from "react-router-dom"

// This module renders the create  foodtable form and edit foodtable form
export const Foodtableform = (props) =>{
    const history = useHistory()
    
    const{foodtables,getFoodtable,addFoodtable,updateFoodtable} = useContext(FoodTableContext)
    const{foodtypes,getFoodtype} = useContext(FoodtypeContext)
    //  console.log(foodtypes)

     const editMode = props.match.params.hasOwnProperty("foodtypeId")

    const[foodtable,setFoodtable] = useState({
        label: "",
        description: "",
        foodType_id: 0,
    })

    const getFoodtableInEditMode = () => {
    
        const foodtablesId = parseInt(props.match.params.foodtablesId)
        const selectedFoodtable = foodtables.find(a => a.id === foodtablesId) || {}
        setFoodtable(selectedFoodtable)
    }

    useEffect(() => {
        getFoodtype()
      }, [])

    useEffect(() =>{
        getFoodtableInEditMode()
    },[foodtables])

        /*
  Update the `Foodtable` state variable every time
  the state of one of the input fields changes.
  */
  const changeFoodtableState = (domEvent) => {
    const newFoodtableState = Object.assign({}, foodtable)
    newFoodtableState[domEvent.target.name] = domEvent.target.value
    setFoodtable(newFoodtableState)
  }

  // const editMode = parseInt(props.match.params.foodtableId)
  const constructNewFoodtable = () =>{
    if(editMode === false){
    addFoodtable(foodtable)
    .then(()=>props.history.push("/foodtables"))
    }else{
        updateFoodtable({
            id:parseInt(props.match.params.foodtypeId),
            label:foodtable.label,
            description:foodtable.description,
            // foodtype:foodtables.foodtypes.foodtype_id
        })
      
        .then(() => props.history.push("/foodtables"))

    }}
  // console.log(foodtables)
// i got this path from props.

    // console.log(props)

    const Foodlabel = props.location.state ? props.location.state.choosentable :{}
    console.log(Foodlabel)
    console.log(editMode)
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
