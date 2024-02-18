import { useModalRoute } from '../hooks/useModalRoute'
import { Lorem } from './Lorem'

export const ModalTop = () => {
  const { navigateModal } = useModalRoute()

  return (
    <>
      <h1>Modal</h1>
      <button onClick={() => navigateModal('modal-next')}>Next</button>
      <p>
        <Lorem />
      </p>
    </>
  )
}
