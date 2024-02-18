import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Outlet />
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
