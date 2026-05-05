import { useEffect, useState } from "react"
import "./About.css"

const API_URL = import.meta.env.VITE_API_URL

type ContentItem = {
  key: string
  value: string
}

const About = () => {
  const [text, setText] = useState("")

  useEffect(() => {
    fetch(`${API_URL}/content/about`)
      .then((res) => res.json())
      .then((data: ContentItem[]) => {
        const aboutText = data.find((item) => item.key === "text")
        setText(aboutText?.value || "")
      })
  }, [])

  return (
    <section className="about">
      <div>
        <h2>Sobre mí</h2>
        <p>{text}</p>
      </div>
    </section>
  )
}

export default About
