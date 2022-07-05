import {Link} from 'react-router-dom'

import './index.css'
import {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <nav className="nav-header">
        <div className="blog-container">
          <h1 className="blog-title">Videos App</h1>
          <ul className="nav-menu">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
