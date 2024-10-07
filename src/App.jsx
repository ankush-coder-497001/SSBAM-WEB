import './App.css'
import About from './components/About/About'
import Clubs from './components/Clubs/Clubs'
import Tabs from './components/Clubs/Tabs'
import Courses from './components/Courses/Courses'
import Footer from './components/footer/Footer'
import HeroSection from './components/Hero'
import Message from './components/Message/Message'
import PrincipalMessage from './components/Message/PrincMess'
import NavBar from './components/navbar/nav'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <>
<NavBar/>
<HeroSection/>
<About/>
<Message/>
<PrincipalMessage/>
<div style={{width:'100%',display:'flex',justifyContent:'space-around',marginTop:'10px',marginBottom:'10px'}}>
<Sidebar/>
<Tabs/>
</div>
<Footer/>
    </>
  )
}

export default App
