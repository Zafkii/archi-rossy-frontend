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
