import React, {useState, createContext, useContext, useRef} from "react"
console.log(process.env.REACT_APP_PRIVATE_KEY)
const ResultContext = createContext()

export const ResultContextProvider = ({children}) => {
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("Andrew Tate")
  const baseUrl = useRef("")
  const options = useRef({})
  const base = (i) => {
    const images = () => {
      baseUrl.current = `https://bing-image-search1.p.rapidapi.com/images/search?q=${i}`
      options.current = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_PRIVATE_KEY,
          "X-RapidAPI-Host": "bing-image-search1.p.rapidapi.com",
        },
      }
    }
    const link = () => {
      baseUrl.current = `https://bing-web-search1.p.rapidapi.com/search?q=${i}&freshness=Day&textFormat=Raw&safeSearch=Off&mkt=en-us`

      options.current = {
        method: "GET",
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": process.env.REACT_APP_PRIVATE_KEY,
          "X-RapidAPI-Host": "bing-web-search1.p.rapidapi.com",
        },
      }
    }
    const news = () => {
      baseUrl.current = `https://bing-news-search1.p.rapidapi.com/news/search?q=${i}&safeSearch=Off&textFormat=Raw&freshness=Day`
      options.current = {
        method: "GET",
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": process.env.REACT_APP_PRIVATE_KEY,
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      }
    }
    const videos = () => {
      baseUrl.current = `https://bing-video-search1.p.rapidapi.com/videos/search?q=${i}`
      options.current = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_PRIVATE_KEY,
          "X-RapidAPI-Host": "bing-video-search1.p.rapidapi.com",
        },
      }
    }

    return {images, link, news, videos}
  }

  const getResult = async (q, type) => {
    switch (type) {
      case "/search":
        base(q).link()

        break
      case "/images":
        base(q).images()
        break
      case "/news":
        base(q).news()
        break
      case "/videos":
        base(q).videos()
        break
      default:
        break
    }

    setIsLoading(true)

    const response = await fetch(baseUrl.current, options.current)

    const data = await response.json()
    console.log(data)
    setResult(data)
    setIsLoading(false)
  }

  return (
    <ResultContext.Provider value={{getResult, result, searchTerm, setSearchTerm, isLoading}}>
      {children}
    </ResultContext.Provider>
  )
}

export const useResultContext = () => {
  return useContext(ResultContext)
}
