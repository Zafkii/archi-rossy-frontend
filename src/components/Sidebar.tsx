import { useState } from "react"
import "./Sidebar.css"

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const toggleSidebar = () => {
    setOpen(!open)
  }

  const closeSidebar = () => {
    setOpen(false)
  }

  return (
    <>
      {/* 🔥 Botón hamburguesa */}
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      {/* 🔥 Sidebar */}
      <nav className={`sidebar ${open ? "open" : ""}`}>
        <ul>
          <li onClick={closeSidebar}>
            <a href="#top">Inicio</a>
          </li>

          <li onClick={closeSidebar}>
            <a href="#about">Sobre mí</a>
          </li>

          <li onClick={closeSidebar}>
            <a href="#contact">Contacto</a>
          </li>

          <li onClick={closeSidebar}>
            <a href="#footer">Footer</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar
