import './left.css'
import Navleft from '../navbar/navleft'
import FooterLeft from '../footer/fotterLeft'


export default function Left(params) {
    return (
        <div className="left">
            <Navleft />
            <div className="mainLeft">
                <div className="imageCouch">
                    <img src='images.png' alt='' className='imgcouch'/>
                </div>

                <div className="sidetext">
                    <span>01</span>/03
                </div>
            </div>
            <FooterLeft />
           

           

        </div>
    )
}