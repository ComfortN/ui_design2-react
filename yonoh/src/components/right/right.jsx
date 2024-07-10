import './right.css'
import Navbar from '../navbar/navbar'
import FooterRight from '../footer/footer'

export default function Right() {
    return (
        <div className="right">
          <Navbar />
            <div className="rightContainer">
        
        <h1>Wood Candy Sofa</h1>


        <div className="productInfo">

          <p>Yonoh Creative Studio from Spain has won many<br/>
            design awards such as iF and red dot.<br />
            Complexity and simplicity are not <br />
            Yonoh's defination of design.
          </p>


          <p className='prize'><strong>$399.00</strong></p>

          

          <div className="cartBuyBtn">
            <button className='buyNow'>BUY NOW</button>
          </div>
          
        </div>
      </div>
      <FooterRight />
    
        </div>
    )
}