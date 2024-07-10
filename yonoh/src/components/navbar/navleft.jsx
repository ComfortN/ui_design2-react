import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

export default function navleft() {
  return (
    <div>
        <div className="navicons">
            <FaHeart />
            <FaShoppingCart />
            <IoMdPerson />

            </div>
    </div>
  )
}
