import './footer.css'
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { HiArrowLongLeft } from "react-icons/hi2";


export default function Footer(params) {
    return (
        <div className="footer">
            <div className="footerIcons">
                <FaGoogle className= 'icon' />
                <FaTwitter className= 'icon' />
                <FaFacebookF className= 'icon' />
            </div>
            <div className="arrowLeft">
                <HiArrowLongLeft className = "arrow" />
            </div>
           
        </div>
    )
}