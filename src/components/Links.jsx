import React from "react"
import {NavLink} from "react-router-dom"

const links = [
  {url: "/search", text: "🔎 All"},
  {url: "/images", text: "📷 images"},
  {url: "/news", text: "📰 news"},
  {url: "/videos", text: "📺 videos"},
]

export const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between mt-4 items-center w-screen p-2">
      {links.map(({url, text}, index) => (
        <NavLink key={index} to={url}>
          {text}
        </NavLink>
      ))}
    </div>
  )
}
