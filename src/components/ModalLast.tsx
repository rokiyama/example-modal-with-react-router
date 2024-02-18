import { useNavigate } from 'react-router-dom'
import { useModalRoute } from '../hooks/useModalRoute'

export const ModalLast = () => {
  const navigate = useNavigate()
  const { closeModal } = useModalRoute()

  return (
    <>
      <h1>Modal 3</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => closeModal()}>Close</button>
      <p>Last modal</p>
    </>
  )
}
