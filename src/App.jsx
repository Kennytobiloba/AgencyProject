
import './App.css'
import About from './Container/About/About'
import Achievement from './Container/Achievement/Achievement'
import Community from './Container/Community/Community'
import Customer from './Container/Customer/Customer'
import Fotter from './Container/Footer/Fotter'
import Footer from './Container/Footertwo/Footer'
import Home from './Container/Home/Home'
import Navbar from './Container/Navbar/Navbar'
import Service from './Container/Service/Service'
import Unlock from './Container/Unlock/Unlock'

function App() {
  

  return (
   <div>
    <Navbar/>
    <Home/>
    <Service/>
    <About/>
    <Achievement/>
    <Unlock/>
    <Customer/>
    <Community/>
    <Fotter/>
    <Footer/>
   </div>
     
  )
}

export default App
