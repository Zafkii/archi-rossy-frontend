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
