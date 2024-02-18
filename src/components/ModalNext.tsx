import { useNavigate } from 'react-router-dom'
import { useModalRoute } from '../hooks/useModalRoute'

export const ModalNext = () => {
  const navigate = useNavigate()
  const { navigateModal } = useModalRoute()

  return (
    <>
      <h1>Modal 2</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigateModal('modal-last')}>Next</button>
      <p>Second modal</p>
    </>
  )
}
