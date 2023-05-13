import React from "react"
import {Link} from "react-router-dom"
import {Search} from "./Search"
export const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className=" p-5 pb-0 flex flex-wrap  justify-center items-center sm:justify-between border-b border-gray-200 dark:border-gray-700 w-screen ">
      <div className="flex justify-between items-center space-x-5 w-screen flex-row ">
        <Link to="/">
          <p className="bg-blue-500 font-bold text-white py-1 px-2 rounded text-3xl dark:bg-gray-500">
            RunDown 🔎
          </p>
        </Link>

        <button
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-3 py-1 hover:shadow-md font-bold"
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? "Dark 🌚" : "Light ☀️"}
        </button>
      </div>
      <Search />
    </div>
  )
}
