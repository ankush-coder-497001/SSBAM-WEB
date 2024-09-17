import { useEffect, useState } from 'react';
import './nav.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";

const NavBar = ()=>{

  const [bar,setbar] = useState(false);

  const HandleOnBarClick = ()=>{
    setbar(!bar);
  }


  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // You can change this value based on when you want the background to change
      const sectionOffset = window.innerHeight / 1; // halfway through the viewport

      if (window.scrollY > sectionOffset) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <div className={`nav ${bar?'show':'hide'} ${navBackground ? 'navbar-colored' : 'navbar-transparent'} `} >
<div className="nav-items">Home</div>
<ul className="nav-list">
        <li className="nav-item dropdown">
          <a href="#" className="nav-link nav-items">About Us<IoMdArrowDropdown />
          </a>
          <ul className="dropdown-menu">
            <li><a href="#">About SSBAM</a></li>
            <li><a href="#">Recognition And Accrediation</a></li>
            <li><a href="#">Administrative Staff</a></li>
            <li><a href="#">Governing Body</a></li>
          </ul>
        </li>
      </ul>
<ul className="nav-list">
        <li className="nav-item dropdown">
          <a href="#" className="nav-link nav-items">Courses<IoMdArrowDropdown />
          </a>
          <ul className="dropdown-menu" style={{width:"30vw"}}>
            <li><a href="#">UG Diploma Courses</a></li>
            <li><a href="#">UG Degree Courses</a></li>
            <li><a href="#">PG Diploma Courses</a></li>
            <li><a href="#">PG Degree Courses</a></li>
            <li><a href="#">Authorized Research Center With Approved By Sant Gahira Guru Vishwavidyalaya</a></li>
            <li><a href="#">Authorized Study Center Of MGHV Wardha,MH(Distance Course)</a></li>
          </ul>
        </li>
      </ul>
<ul className="nav-list">
        <li className="nav-item dropdown">
          <a href="#" className="nav-link nav-items">Departments<IoMdArrowDropdown /></a>
          <ul className="dropdown-menu">
            <li><a href="#">Department of CS & IT</a></li>
            <li><a href="#">Department of Physical Science</a></li>
            <li><a href="#">Department of Life Science</a></li>
            <li><a href="#">Department of Commerce and Management</a></li>
            <li><a href="#">Department of Arts and Social Science</a></li>
            <li><a href="#">Department of Education</a></li>
          </ul>
        </li>
      </ul>
<ul className="nav-list">
        <li className="nav-item dropdown">
          <a href="#" className="nav-link nav-items">Student Corner <IoMdArrowDropdown /></a>
          <ul className="dropdown-menu">
            <li><a href="#">Admission Notification</a></li>
            <li><a href="#">Syllabus</a></li>
            <li><a href="#">Student Profile</a></li>
            <li><a href="#">Orientation</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">ADD-ON COURSE</a></li>
          </ul>
        </li>
      </ul>
<ul className="nav-list">
        <li className="nav-item dropdown">
          <a href="#" className="nav-link nav-items">Gallery <IoMdArrowDropdown /></a>
          <ul className="dropdown-menu">
            <li><a href="#">Photo Gallery</a></li>
            <li><a href="#">Video Gallery</a></li>
          </ul>
        </li>
      </ul>
<ul className="nav-list">
        <li className="nav-item dropdown">
          <a href="#" className="nav-link nav-items">Academics <IoMdArrowDropdown />
          </a>
          <ul className="dropdown-menu">
            <li><a href="#">Academic Calendar</a></li>
            <li><a href="#">Annual Action plan</a></li>
            <li><a href="#">Time Table</a></li>
            <li><a href="#">Rules and Regulations</a></li>
            <li><a href="#">Fee Structure</a></li>
          </ul>
        </li>
      </ul>
<ul className="nav-list">
        <li className="nav-item dropdown">
          <a href="#" className="nav-link nav-items">Compliance <IoMdArrowDropdown />
          </a>
          <ul className="dropdown-menu">
            <li><a href="#">NAAC</a></li>
            <li><a href="#">IQAC</a></li>
            <li><a href="#">AISHE & RUSA</a></li>
            <li><a href="#">NCTE</a></li>
          </ul>
        </li>
      </ul>
      <div className="nav-items">Conatct Us</div>

    </div>
      <VscThreeBars onClick={HandleOnBarClick} className='bar' />
    </>
  )
}

export default NavBar;