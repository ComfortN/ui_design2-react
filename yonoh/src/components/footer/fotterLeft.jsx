import { HiArrowLongRight } from "react-icons/hi2";
import './footer.css'

export default function FooterLeft(params) {
    return (
        <div className="footerl">
            
            <div className="arrowLeft">
                <HiArrowLongRight className = "arrow" />
            </div>
           <div className="addTocart">
            Add to cart +

                
            </div>
        </div>
    )
}