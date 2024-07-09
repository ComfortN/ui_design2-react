import './home.css'
import Navbar from '../components/navbar/navbar'
import Right from '../components/right/right'
import Left from '../components/left/left'
import Footer from '../components/footer/footer'

export default function Home() {
    return (
        <div className="home">
            <Navbar />
            <div className="home-wrapper">
                <Right />
                <Left />
            </div>
            <Footer />
            
        </div>
    )
    
}