import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "./CategoryProvider"
import "./Category.css"

export const CategoryForm = (props) => {
    // props - package of info sending with components history,loc,match
    //  just the info we are passing from one compo to other.
    const { categories, addCategory, getCategories, updateCategory  } = useContext(CategoryContext)
    const [category, setCategory] = useState({})
  
    // if it has ID then editmode, or create mode
     // it just returns true or false
    const editMode = props.match.params.hasOwnProperty("categoryId")

    // console.log(props)

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
    //    creates a new category with same properties of category & sets that value = to changes in the form
        const newCategory = Object.assign({}, category)
        newCategory[event.target.name] = event.target.value
        setCategory(newCategory)
    }

    const getCategoryInEditMode = () => {
        if (editMode) {
           
            const categoryId = parseInt(props.match.params.categoryId)
            // getting the id and finding the object 
            const selectedCategory = categories.find(c => c.id === categoryId) || {}
            setCategory(selectedCategory)
        }
    }
    
//    empty array renders on second render
    useEffect(() => {
        getCategories()
    }, [])
    // once you have categories,it will renders
    useEffect(() => {
        getCategoryInEditMode()
    }, [categories])

    const constructNewCategory = () => {
            if (editMode) {
                updateCategory({
                    id: category.id,
                    label: category.label
                })
                    .then(() => props.history.push("/categories"))
            } else {
                addCategory({
                    label: category.label
                })
                    .then(() => props.history.push("/categories"))
            }
        }

        return (
            <form className="categoryForm">
                <h2 className="categoryForm__title">{editMode ? "Update Category" : "Add Category"}</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="label">Create a new category</label>
                        <input type="text" name="label" required autoFocus className="form-control"
                            proptype="varchar"
                            placeholder="Add text"
                            defaultValue={category.label}
                            onChange={handleControlledInputChange}
                        />
                    </div>
                </fieldset>
                {/* <section className ="button">  */}
                <button type="submit"
                    onClick={evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewCategory()
                    }}
                    className="btn btn-primary">
                    {editMode ? "Save Update" : "Save"}
                </button>
                <button onClick={() => {
                    props.history.push(`/categories`)
                }}>Back
                </button>
                {/* </section> */}
            </form>
        )

}