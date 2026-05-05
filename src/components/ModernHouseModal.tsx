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
