import { useModalRoute } from '../hooks/useModalRoute'

export const Contact = () => {
  const { openModal } = useModalRoute()

  return (
    <div>
      <h1>Contact</h1>
      <div>
        <button onClick={() => openModal('modal-top')}>Open modal</button>
      </div>
    </div>
  )
}
