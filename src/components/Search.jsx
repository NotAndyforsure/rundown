import React, {useEffect, useState, useRef} from "react"
import {useResultContext} from "../contexts/ResultContextProvider"
import {Links} from "./Links"

export const Search = () => {
  const text = useRef("")
  const {setSearchTerm} = useResultContext()

  const handleClick = () => {
    setSearchTerm(text.current)
  }
  const handleInput = ({target}) => {
    text.current = target.value
  }
  return (
    <div className="relative  sm:mt-10 mt-3 flex justify-center items-center flex-col">
      <div className="flex flex-row space-x-4 w-screen justify-center items-center">
        <input
          placeholder="Search a RunDown"
          onChange={handleInput}
          className="sm:w-96 w-80 h-10 dark:text-gray-900 dark:bg-gray-200 border rounded-full shadow-md p-6 outline-none hover:shadow-lg"
        />{" "}
        <button onClick={handleClick} className="text-2xl">
          🔎
        </button>
      </div>
      <Links />
    </div>
  )
}
