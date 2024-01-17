
import './App.css'
import About from './Container/About/About'
import Achievement from './Container/Achievement/Achievement'
import Community from './Container/Community/Community'
import Customer from './Container/Customer/Customer'
import Footerthree from './Container/Footerthree/Footerthree'
import Home from './Container/Home/Home'
import Info from './Container/Info/Info'
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
    <Info/>
    <Footerthree/>
    
   </div>
     
  )
}

export default App
