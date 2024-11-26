import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-blue-500 text-white">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
  <Link to="/"><li className="bg-blue-500 rounded-t-none p-2 list-none hover:bg-blue-800 text-white">Home</li></Link>
  <Link to="/about"><li className="bg-blue-500 rounded-t-none p-2 list-none hover:bg-blue-800 text-white">Sell Products</li></Link>
  <Link to="/products"><li className="bg-blue-500 rounded-t-none p-2 list-none hover:bg-blue-800 text-white">Products</li></Link>
  <Link to="/apply"><li className="bg-blue-500 rounded-t-none p-2 list-none hover:bg-blue-800 text-white">Apply</li></Link>
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <Link to="/"><li>Link 1</li></Link>
            <Link to="/about"><li>Link 2</li></Link>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    </>
  )
}

export default Navbar