import React from "react"
import { Route } from "react-router-dom"
import { CategoryProvider } from "./categories/CategoryProvider"
import { CategoryList } from "./categories/CategoryList"
import { CategoryForm } from "./categories/CategoryForm"
import {FoodtableProvider} from "./foodTable/FoodProvider"
import {FoodList} from "./foodTable/FoodList"
import {FoodtypeForm} from "./foodTable/FoodForm"
import {FoodTableProvider} from "./foodTabless/FoodtableProvider"
import {FoodTable} from "./foodTabless/FoodtableList"
import {Foodtableform} from "./foodTabless/FoodtableForm"
import {EventsProvider} from "./events/EventsProvider"
import {EventsList} from "./events/EventsList"
import {EventForm} from "./events/EventsForm"
import {AddfoodtoEvents} from "./events/Addfoodtoevents"



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

                <Route
                      exact
                      path="/foodtypes/create"
                      render={(props) => <FoodtypeForm {...props} />}
                    />

                <Route
                      path="/foodtypes/edit/:foodtypeId(\d+)"
                      render={(props) => <FoodtypeForm {...props} />}
                    />
                </FoodtableProvider>

                <FoodtableProvider>
                <FoodTableProvider>
                <Route
                      exact
                      path="/foodtables"
                      render={(props) => <FoodTable {...props} />}
                    />
                      <Route
                      exact
                      path="/foodtables/create"
                      render={(props) => <Foodtableform {...props} />}
                    />

                    <Route
                      path="/foodtables/edit/:foodtableId(\d+)"
                      render={(props) => <Foodtableform {...props} />}
                    />
                </FoodTableProvider>
                </FoodtableProvider>

                <EventsProvider>
                <CategoryProvider> 
                <FoodTableProvider>

                  <Route
                     path = "/events/:eventsId(\d+)/foodplanner"
                     render = {(props) => <AddfoodtoEvents {...props}/>}/>
                  <Route
                        exact 
                        path = "/events"
                        render={(props) => <EventsList {...props} />}
                        />
                        <Route
                        exact
                        path="/events/create"
                        render={(props) => <EventForm {...props} />}
                      />
                        <Route
                        path="/events/edit/:eventsId(\d+)"
                        render={(props) => <EventForm {...props} />}
                        />
                </FoodTableProvider>
                </CategoryProvider>
                </EventsProvider>

      </main>
  </>
    )}