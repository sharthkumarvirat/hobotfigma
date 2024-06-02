import React from 'react'
import logos from "../images/logo.png";
export default function Header() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className='flex justify-between w-full sm:flex-col lg:flex-row'>
          <div className="navbar-start">
            <img src={logos} alt="" />
          </div>
          <div className="">
            <ul className="customFlex gap-3">
              <li>Find Suppliers</li>
              <li>
                  <select className='bg-white'>
                  <option value="Find Service Tags">Find Service Tags</option>
                  </select>
              </li>
              <li>
                  <button className="btn bg-transparent  text-[#00732F]">Login / Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
