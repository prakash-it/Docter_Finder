import React from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-500 px-6">
        <img src={assets.logo} alt="" />
        <ul>
            <NavLink>
             <li>Home</li> <hr/>
            </NavLink>
            
            <NavLink>
             <li>All Docters</li> <hr/>
            </NavLink>
            
            <NavLink>
             <li>About</li> <hr/>
            </NavLink>
            
            <NavLink>
             <li>Contact</li> <hr/>
            </NavLink>
        </ul>

        <div>
            <button> Create account </button>
        </div>
    </div>
  )
}
