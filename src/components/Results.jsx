import React, {useEffect} from "react"
import {useLocation} from "react-router-dom"
import ReactPlayer from "react-player"
import {useResultContext} from "../contexts/ResultContextProvider"
import {Loading} from "./Loading"

export const Results = () => {
  const {result, getResult, searchTerm, isLoading} = useResultContext()
  const location = useLocation()

  useEffect(() => {
    if (searchTerm) {
      switch (location.pathname) {
        case "/search":
          getResult(searchTerm, "/search")
          break
        case "/images":
          getResult(searchTerm, "/images")
          break
        case "/videos":
          getResult(searchTerm, "/videos")
          break
        case "/news":
          getResult(searchTerm, "/news")
          break
        default:
          console.log("Error on line 16 of results.jsx")
          break
      }
    }
  }, [searchTerm, location.pathname])

  if (isLoading) return <Loading />

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between items-center space-y-6 sm:px-56">
          {result?.value?.map(({url, name, description}, index) => (
            <div key={index} className="w-full md:w-2/5">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">{url.length > 30 ? url.substring(0, 30) : url}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 font-bold">
                  {name}
                </p>
                <p className="text-small">{description}</p>
              </a>
            </div>
          ))}
        </div>
      )
      break
    case "/images":
      return (
        <div className="flex flex-wrap justify-center flex-row">
          {result?.value?.map(({name, contentUrl, hostPageUrl}, index) => (
            <a
              className="p-5 sm:p-3"
              href={hostPageUrl}
              key={index}
              alt={name}
              target="_blank"
              rel="noreferrer"
            >
              <img src={contentUrl} loading="lazy" width="355" height="200px" />
              <p className="w-4/5 break-words text-sm mt-2">{name}</p>
            </a>
          ))}
        </div>
      )

      break
    case "/news":
      return (
        <div className="flex flex-wrap justify-between items-center space-y-6 sm:px-56">
          {result?.value?.map(({url, name, description, provider, datePublished}, index) => (
            <div key={index} className="w-full md:w-2/5">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-lg dark:text-blue-300 text-blue-700 font-bold">{name}</p>
                <div className="flex flex-col justify-between">
                  <p className="flex text-small font-bold ">
                    {provider[0].name} | {datePublished.substring(0, 10)}
                  </p>
                  <p className="flex text-md">{description} </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )

      break
    case "/videos":
      return (
        <div className="flex flex-wrap justify-center">
          {result?.value?.map(({contentUrl}, index) => (
            <div key={index} className="p-2">
              <ReactPlayer url={contentUrl} controls width="355px" height="200px" />
            </div>
          ))}
        </div>
      )

      break

    default:
      return "ERROR!"
      break
  }
}
