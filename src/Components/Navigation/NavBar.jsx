/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { Container } from 'reactstrap'
// import { IoIosArrowDown } from "react-icons/io";
// import { FaRegUser } from "react-icons/fa";



// const NavBar = () => {
//   // to change burger classes
//   const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
//   const [menu_class, setMenuClass] = useState("menu hidden")
//   const [isMenuClicked, setIsMenuClicked] = useState(false)


//   // toggle burger menu change
//   const updateMenu = () => {
//     if (!isMenuClicked) {
//       setBurgerClass("burger-bar clicked")
//       setMenuClass("menu visible")
//     }
//     else {
//       setBurgerClass("burger-bar unclicked")
//       setMenuClass("menu hidden")
//     }
//     setIsMenuClicked(!isMenuClicked)
//   }
//   return (
//     <div>


//       <nav className="navbar navbar-expand-lg navbar-dark">
//         <Container>
//           <a className="navbar-brand" href="#">
//             <Link classNameName="navbar-brand mt-2 mt-lg-0" to="/">
//               <img
//                 src="/images/logo.jpeg"
//                 alt="Logo"
//                 loading="lazy"
//               />
//             </Link></a>
//           <div data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <div className='nav2 '>
//               <div className={menu_class}></div>
//               <div className="burger-menu" onClick={updateMenu}>
//                 <div className={burger_class} ></div>
//                 <div className={burger_class} ></div>
//                 <div className={burger_class} ></div>
//               </div>
//             </div>
//           </div>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav m-auto">
//               <li className="nav-item active">
//                 <Link className="nav-link" to="/">Home</Link>
//               </li>

//               <li className="nav-item d-flex">
//                 <a className="nav-link" href="#courses">courses</a>
//                 <IoIosArrowDown size={18} className='text-light mt-3 IoIosArrowDown' />
//               </li>

//               <li className="nav-item d-flex ">
//                 <a className="nav-link" href="#instructors">our instructors</a>
//                 <IoIosArrowDown size={18} className='text-light mt-3 IoIosArrowDown' />

//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#about">about</a>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link" href="#contact">contact</a>
//               </li>

//             </ul>
//             <form className="form-inline my-2 my-lg-0">
//               <FaRegUser size={28} className='mr-3 mb-2 text-light FaRegUser' />
//               <a className='enroll signup px-3 py-1 mr-2 mb-2'>sign up</a>
//               <a className='enroll px-3 py-1 mb-2'>log in</a>
//             </form>
//           </div>
//         </Container>
//       </nav>


//     </div>
//   )
// }

// export default NavBar





import React, { useState } from 'react';
import { FaBars, FaTimes, FaRegUser } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className="container">
        <div className="navbar-logo">
          <Link to="/"><img src="/images/logo.jpeg" alt="Logo" /></Link>
        </div>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {/* Navigation Links */}

          <li>
            <Link to="/">Home</Link>
          </li>

          <li className='mega-menu-hover'>
            <div>
              <Link to="/courses" className='mr-0'>courses</Link>
              <IoIosArrowDown size={18} className='mr-3 mt-1 IoIosArrowDown' />
            </div>
            <div className="mega-menu">
              <div className="box">
                <div className='menu-links'><Link className='menu-links-color' to="">link 1</Link></div>
                <div className='menu-links'><Link className='menu-links-color' to="">link 2</Link></div>
                <div className='menu-links'><Link className='menu-links-color' to="">link 3</Link></div>
                <div className='menu-links'><Link className='menu-links-color' to="">link 4</Link></div>
                <div className='menu-links'><Link className='menu-links-color' to="">link 5</Link></div>
              </div>
            </div>
          </li>

          <li className='mr-3'>
            <div>
              <Link to="/instructors" className='mr-0'>our instructors</Link>
            </div>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/about">about</Link>
          </li>


          {/* User Registration */}
          <div className="user-options">
            <Link to='/signup' className="signup px-3 py-1 mr-2 mb-2">Sign Up</Link>
            <Link to='/login' className="signup px-3 py-1 mb-2">Log In</Link>
            <Link to='/profile'><FaRegUser size={28} className="mr-3 mb-2 fauser" /></Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && <div className="overlay" onClick={toggleNavbar} />}

        {/* Hamburger Menu Icon */}
        <div className="navbar-toggle" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

