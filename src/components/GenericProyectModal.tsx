import "./GenericProyectModal.css"
import React, { useEffect } from "react"

// 🔥 Tipos
type Block =
  | { type: "image"; url: string }
  | { type: "text"; content: string }
  | { type: "subtitle"; content: string }
  | { type: "spacer"; size?: number }

interface Project {
  id: string
  title: string
  description: string
  cover_image: string
  blocks: Block[]
}

interface Props {
  project: Project
  onClose: () => void
}

// 🔥 PARSER DE TEXTO
const parseText = (text: string) => {
  const elements: React.ReactNode[] = []

  const regex = /\|([br])-(.*?)-\1\|/g

  let lastIndex = 0
  let match
  let key = 0

  while ((match = regex.exec(text)) !== null) {
    const [full, type, content] = match
    const index = match.index

    if (index > lastIndex) {
      elements.push(text.slice(lastIndex, index))
    }

    if (type === "b") {
      elements.push(<strong key={key++}>{content}</strong>)
    }

    if (type === "r") {
      elements.push(
        <a key={key++} href={content} target="_blank" rel="noreferrer">
          {content}
        </a>,
      )
    }

    lastIndex = index + full.length
  }

  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex))
  }

  return elements
}

const ProjectModal = ({ project, onClose }: Props) => {
  // 🔥 BOTÓN ATRÁS (historial)
  useEffect(() => {
    // empuja un estado al abrir el modal
    window.history.pushState({ modal: true }, "")

    const handlePopState = () => {
      onClose()
    }

    window.addEventListener("popstate", handlePopState)

    return () => {
      window.removeEventListener("popstate", handlePopState)
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // 🔥 evita cierre interno
      >
        <button className="close-btn" onClick={onClose}>
          X
        </button>

        <h2>{project.title}</h2>

        <img src={project.cover_image} alt={project.title} />

        {project.blocks.map((block: Block, i: number) => {
          if (block.type === "image") {
            return <img key={i} src={block.url} />
          }

          if (block.type === "text") {
            return <p key={i}>{parseText(block.content)}</p>
          }

          if (block.type === "subtitle") {
            return <h3 key={i}>{block.content}</h3>
          }

          if (block.type === "spacer") {
            return <div key={i} style={{ height: block.size || 20 }} />
          }

          return null
        })}
      </div>
    </div>
  )
}

export default ProjectModal
