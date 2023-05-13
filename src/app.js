import React, {useState} from "react"
import "./index.css"
import {Navbar} from "./components/Navbar"
import {Footer} from "./components/Footer"
import {Routescmp} from "./components/Routescmp"

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 min-h-screen dark:bg-gray-900 dark:text-gray-200">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routescmp />
        <Footer />
      </div>
    </div>
  )
}
export default App
