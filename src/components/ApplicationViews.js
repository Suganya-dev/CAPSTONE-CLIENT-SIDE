import React from "react"
// import { Route } from "react-router-dom"

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

      </main>


      </>
    )}