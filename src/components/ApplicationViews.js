import React from "react"
import { Route } from "react-router-dom"
import { CategoryProvider } from "./categories/CategoryProvider"
import { CategoryList } from "./categories/CategoryList"
import { CategoryForm } from "./categories/CategoryForm"
import {FoodtableProvider} from "./foodTable/FoodProvider"
import {FoodList} from "./foodTable/FoodList"

export const ApplicationViews = () => {
    return (
      <>
        <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
              <CategoryProvider>
                    <Route
                      exact
                      path="/categories"
                      render={(props) => <CategoryList {...props} />}
                    />

                    <Route
                      exact
                      path="/categories/create"
                      render={(props) => <CategoryForm {...props} />}
                    />
                    <Route
                      path="/categories/edit/:categoryId(\d+)"
                      render={(props) => <CategoryForm {...props} />}
                    />
                </CategoryProvider>

                <FoodtableProvider>
                   
                <Route
                      exact
                      path="/foodtypes"
                      render={(props) => <FoodList {...props} />}
                    />

                </FoodtableProvider>

      </main>
  </>
    )}