import React from 'react'
import { FaHeart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

export default function navleft() {
  return (
    <div>
        <div className="navicons">
            <FaHeart className ='navIcon'/>
            <FaCartShopping className ='navIcon' />
            <IoMdPerson className ='navIcon' />

            </div>
    </div>
  )
}
