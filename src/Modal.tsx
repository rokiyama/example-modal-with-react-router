import { useNavigate } from 'react-router-dom'

export const Modal = () => {
  const navigate = useNavigate()

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(91, 112, 131, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: 350,
          height: 350,
          borderRadius: 10,
          backgroundColor: 'white',
        }}
      >
        <h1>Modal</h1>
        <button onClick={() => navigate(-1)}>Close</button>
      </div>
    </div>
  )
}
