import './navbar.css'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

export default function Navbar(params) {
    return (
        <div className="navbar">
            
            <ul className="navlists">
                <li className="navlist">Types</li>
                <li className="navlist price">Price</li>
                <li className="navlist">Connect</li>

            </ul>
            

            <div className="navicons">
            <FaHeart />
            <FaShoppingCart />
            <IoMdPerson />

            </div>
        </div>
    )
}