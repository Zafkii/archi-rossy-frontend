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
      .then((res) => {
        if (!res.ok) throw new Error("Error en API")
        return res.json()
      })
      .then((data: Project[]) => setProjects(data))
      .catch((err) => console.error("❌ Error cargando proyectos:", err))
  }, [])

  const selectedProject = projects.find((p) => p.id === selectedProjectId)

  // 🔥 Vista normal (grid)
  if (!selectedProject) {
    return (
      <div id="top" className="main">
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

  // 🔥 Modal
  return (
    <GenericProjectModal
      project={selectedProject}
      onClose={() => setSelectedProjectId(null)}
    />
  )
}

export default Home
