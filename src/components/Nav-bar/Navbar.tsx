import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='container'>
        <h1 className='container text-center'>Task Management App</h1>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <ul className="navbar-nav mx-auto d-flex flex-row">
                <li className="nav-item">
                    <Link className="nav-link mx-2" href="/tasks">
                        Tasks
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link mx-2" href="/task-details">
                        Details Api
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
</div>

  )
}

export default Navbar