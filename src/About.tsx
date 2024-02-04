import { Link, useLocation } from 'react-router-dom'

export const About = () => {
  const location = useLocation()

  return (
    <div>
      <h1>About</h1>
      <p>This is about page.</p>
      <div>
        <button>
          <Link to="/modal/1" state={{ background: location }}>
            Open modal
          </Link>
        </button>
      </div>
    </div>
  )
}
