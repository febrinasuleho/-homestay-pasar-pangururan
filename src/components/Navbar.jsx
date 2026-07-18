import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <div className="navbar__brand" aria-label="Brand">
          Homestay Pasar Pangururan
        </div>

        <nav className="navbar__nav" aria-label="Navigasi">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'navlink navlink--active' : 'navlink'
            }
          >
            Home
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

