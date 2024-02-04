import { useNavigate } from 'react-router-dom'

export const Modal = () => {
  const navigate = useNavigate()

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(91, 112, 131, 0.4)',
        overflowY: 'scroll',
        WebkitOverflowScrolling: 'touch',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={() => navigate('/')}
    >
      <div
        style={{
          width: 350,
          height: 350,
          borderRadius: 10,
          backgroundColor: 'white',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Modal</h1>
        <button onClick={() => navigate('/')}>Close</button>
      </div>
    </div>
  )
}
