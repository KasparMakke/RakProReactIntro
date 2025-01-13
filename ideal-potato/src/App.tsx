import React, { useState } from "react"
import "./App.css"
import Counter from './components/Counter'
import UserAccount from "./components/UserAccount"

const hobbies = ["Reading", "Coding", "Gaming", "Traveling"]

function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(prevShow => !prevShow)

  return (
    <>
      <Counter />
      <UserAccount
        name="Kaspar"
        hobbies={hobbies}
      />
    </>
  )
}

export default App
