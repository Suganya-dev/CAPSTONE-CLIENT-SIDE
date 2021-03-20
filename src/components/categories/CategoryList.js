import React, { useContext, useEffect } from "react"
import { CategoryContext } from "../categories/CategoryProvider"
import { Category } from "./Category"

export const CategoryList = (props) => {
    const { categories, getCategories } = useContext(CategoryContext)
    // const userId =  parseInt(localStorage.getItem("app_user_id"))
    useEffect(()=>{
        getCategories()
    }, [])

    return (
        <>
            <div className="categories">
            <h2>EVENTS CATEGORY</h2>

             <section className ="button">
                <button onClick={() => {
                    props.history.push(`/categories/create`)
                }}>Create new category
                </button>
                </section>
                
                <div className="categories">
                    
                    {categories
                    .map(category => {
                        return <Category key={category.id} 
                        category={category} props={props} 
                        />
                    })}
                </div>
            </div>
        </>
    )
}