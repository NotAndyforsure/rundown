import React from "react"
import {createRoot} from "react-dom/client"
import App from "./app"
import {BrowserRouter as BRouter} from "react-router-dom"
import {ResultContextProvider} from "./contexts/ResultContextProvider"

const domNode = document.getElementById("root")
const root = createRoot(domNode)

root.render(
  <ResultContextProvider>
    <BRouter>
      <App />
    </BRouter>
  </ResultContextProvider>
)
