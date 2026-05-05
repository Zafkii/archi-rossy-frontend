# Project Context

## src/components/Footer.tsx

```
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <p>&copy; {new Date().getFullYear()} Estudio de Arquitectura</p>
    </footer>
  )
}

export default Footer

```

## src/components/Header.tsx

```
import { useEffect, useState } from "react"
import "./Header.css"

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const contact = document.getElementById("contact")

    if (!contact) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(!entry.isIntersecting)
        })
      },
      {
        threshold: 0.3, // 👈 no desaparece hasta que contacto entra bien
      },
    )

    observer.observe(contact)

    return () => observer.disconnect()
  }, [])

  return (
    <header className={`main-header ${isVisible ? "visible" : "hidden"}`}>
      <h1>Mis proyectos de Arquitectura</h1>
    </header>
  )
}

export default Header

```

## src/components/GenericProjectCard.tsx

```
import "./GenericProjectCard.css"

type GenericProjectCardProps = {
  id: string
  title: string
  description: string
  imageUrl: string
  onClick: (id: string) => void
}

const GenericProjectCard = ({
  id,
  title,
  description,
  imageUrl,
  onClick,
}: GenericProjectCardProps) => {
  return (
    <div
      className="card"
      onClick={() => onClick(id)}
      style={{ cursor: "pointer" }}
    >
      <img src={imageUrl} alt={title} className="image" />
      <div className="content">
        <h3 className="title">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default GenericProjectCard

```

## src/components/GenericProyectModal.tsx

```
import "./GenericProyectModal.css"
import React from "react"

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

    // texto normal antes
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

  // resto del texto
  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex))
  }

  return elements
}

const ProjectModal = ({ project, onClose }: Props) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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

```

## src/components/Home.tsx

```
import { useEffect, useState } from "react"
import GenericProjectCard from "./GenericProjectCard"
import GenericProjectModal from "./GenericProyectModal"

type Block = { type: "image"; url: string } | { type: "text"; content: string }

interface Project {
  id: string
  title: string
  description: string
  cover_image: string
  blocks: Block[]
}

const API_URL = import.meta.env.VITE_API_URL

const Home = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  )

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data))
  }, [])

  const selectedProject = projects.find((p) => p.id === selectedProjectId)

  if (!selectedProject) {
    return (
      <div id="top" className="main">
        {" "}
        {/* 🔥 CAMBIO CLAVE */}
        {projects.map((proj) => (
          <GenericProjectCard
            key={proj.id}
            id={proj.id}
            title={proj.title}
            description={proj.description}
            imageUrl={proj.cover_image}
            onClick={setSelectedProjectId}
          />
        ))}
      </div>
    )
  }

  return (
    <GenericProjectModal
      project={selectedProject}
      onClose={() => setSelectedProjectId(null)}
    />
  )
}

export default Home

```

## src/components/ModernHouseModal.tsx

```
interface Props {
  onClose: () => void
}
const ModernHouseModal = ({ onClose }: Props) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <p>
          hola w aqui se deberia mostrar el modal respectivo de la habitacion
        </p>
      </div>
    </div>
  )
}
export default ModernHouseModal

```

## src/components/Sidebar.tsx

```
import { useState } from "react"
import "./Sidebar.css"

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setOpen(false)
    }
  }

  return (
    <>
      {/* 🍔 botón */}
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* 🧱 sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <h3>Menú</h3>

        <ul>
          <li onClick={() => scrollTo("top")}>🏠 Mis Proyectos</li>

          <li onClick={() => scrollTo("about")}>👤 Sobre mí</li>

          <li onClick={() => scrollTo("contact")}>📬 Contacto</li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar

```

## src/components/About.tsx

```
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

```

## src/components/Contact.tsx

```
import { useEffect, useState } from "react"
import "./Contact.css"

const API_URL = import.meta.env.VITE_API_URL

interface ContactItem {
  key: string
  value: string
}

const Contact = () => {
  const [contacts, setContacts] = useState<ContactItem[]>([])

  useEffect(() => {
    fetch(`${API_URL}/content/contact`)
      .then((res) => res.json())
      .then((data) => setContacts(data))
  }, [])

  const getValue = (key: string) =>
    contacts.find((c) => c.key === key)?.value || ""

  const whatsapp = getValue("whatsapp")
  const email = getValue("email")
  const phone = getValue("phone")

  return (
    <section className="contact">
      <div>
        <h2> Contacto</h2>

        <div className="contact-links">
          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              📱 WhatsApp
            </a>
          )}

          {email && <a href={`mailto:${email}`}>📧 Email</a>}

          {phone && <a href={`tel:${phone}`}>📞 Llamar</a>}
        </div>
      </div>
    </section>
  )
}

export default Contact

```

## src/App.tsx

```
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Sidebar />
      <Header />

      <main>
        <Home />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App

```

## src/main.tsx

```
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import "./styles/theme.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

## src/vite-env.d.ts

```ts
/// <reference types="vite/client" />

```

## index.html

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="logo.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mis Proyectos de Arqui</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```

## .env

```
VITE_API_URL=https://archi-rossy-backend-production.up.railway.app
```

## tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}

```

## package.json

```json
{
  "name": "archi_rossy_frontend",
  "private": true,
  "version": "0.0.1",
  "description": "Rossy's architecture projects  frontend + React UI",
  "type": "module",
  "author": "Zafkii",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "start": "node dist/server.js",
    "lint": "eslint .",
    "preview": "vite preview",
    "c": "tsx scripts/exportProject.ts",
    "ccss": "tsx scripts/exportProjectcss.ts"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.25.0",
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.6",
    "@types/pg": "^8.20.0",
    "@types/react": "^19.1.2",
    "@types/react-dom": "^19.1.2",
    "@vitejs/plugin-react": "^4.4.1",
    "eslint": "^9.25.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "tsx": "^4.21.0",
    "typescript": "~5.8.3",
    "typescript-eslint": "^8.30.1",
    "vite": "^6.3.5"
  }
}

```

## vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

