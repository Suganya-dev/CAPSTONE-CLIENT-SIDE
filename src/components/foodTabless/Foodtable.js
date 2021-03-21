import React, { useContext } from "react"
import { FoodTableContext } from "../foodTabless/FoodtableProvider"
import { Link, useHistory } from "react-router-dom"
import "./Foodtable.css"

// component responsible for rendering a single foodtable

export const Foodtable = ({foodtable}) => {

    const { removeFoodtable } = useContext(FoodTableContext)
    const history = useHistory()

    const confirmDelete =(id)=>{
        const d = window.confirm("Would you like to delete this?")
        if(d===true){
            removeFoodtable(id)
        }
    }
    console.log(foodtable)
   
    return(
    
    <div className ="foodtables">
        <div>   label: <b>{foodtable.label} </b> </div>
        <div> description: <b> {foodtable.description} </b> </div>
        <div> Label: {foodtable.foodType.label} </div>
  
        {/* instead of button ,used link */}
        {/* state i got it from props */}
        <section className ="button"> 
        <button onClick={
                () => {
                    confirmDelete(foodtable.id) 
                }}>Delete
        </button>
        <button> 
        <Link 
        to= {{pathname:`/foodtables/edit/${foodtable.id}`,
        // state:{choosentable:foodtable}
        }}> Edit </Link> </button>
        </section>
        
    </div>
   
) }