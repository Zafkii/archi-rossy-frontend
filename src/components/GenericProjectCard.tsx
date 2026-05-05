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
