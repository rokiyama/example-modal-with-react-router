import { Lorem } from '../components/Lorem'
import { useModalRoute } from '../hooks/useModalRoute'

export const About = () => {
  const { openModal } = useModalRoute()

  return (
    <div>
      <h1>About</h1>
      <p>This is about page.</p>
      <div>
        <button onClick={() => openModal('modal-top')}>Open modal</button>
      </div>
      <p>
        <Lorem />
      </p>
    </div>
  )
}
