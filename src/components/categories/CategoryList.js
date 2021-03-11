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
            <div className="row">
            <h1>CATEGORIES</h1>
                <button onClick={() => {
                    props.history.push(`/categories/create`)
                }}>Create a new category
                </button>
                <div className="column">
                    
                    {categories
                    .map(category => {
                        return <Category key={category.id} 
                        category={category} props={props} 
                        
                    />
                    })
                    }
                </div>
            </div>
        </>
    )
}