import React, { useState } from "react"

export const CategoryContext = React.createContext()

export const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        return fetch("http://localhost:8000/categories", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`
            }
        })
            .then(res => res.json())
            .then(setCategories)
    }

    const addCategory = category => {
        return fetch("http://localhost:8000/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`
            },
            body: JSON.stringify(category)
        })
            .then(getCategories)
    }

    const removeCategory = categoryId => {
        return fetch(`http://localhost:8000/categories/${categoryId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`
            }
        })
            .then(getCategories)
    }

    const updateCategory = category => {
        return fetch(`http://localhost:8000/categories/${category.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("event_user_id")}`
            },
            body: JSON.stringify(category)
        })
            .then(getCategories)
    }

    return (
        <CategoryContext.Provider value={{
            categories, addCategory, getCategories, removeCategory, updateCategory
        }}>
            {props.children}
        </CategoryContext.Provider>
    )
}