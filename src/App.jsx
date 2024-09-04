import './App.css'
import About from './components/About/About'
import Clubs from './components/Clubs/Clubs'
import Courses from './components/Courses/Courses'
import Footer from './components/footer/Footer'
import HeroSection from './components/Hero'
import Message from './components/Message/Message'
import PrincipalMessage from './components/Message/PrincMess'
import NavBar from './components/navbar/nav'

function App() {

  return (
    <>
<NavBar/>
<HeroSection/>
<About/>
<Message/>
<PrincipalMessage/>
<Courses/>
<Clubs/>
<Footer/>
    </>
  )
}

export default App
