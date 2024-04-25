/* eslint-disable no-unused-vars */
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
                    <li class="dropdown fw-bold">
                        <button class="dropbtn">Courses&events<IoIosArrowDown size={18} className='mt-1 IoIosArrowDown' />
                        </button>
                        <div class="dropdown-content">
                            <Link to="/courses">all courses</Link>
                            <Link to="/coursesDetails">web development</Link>
                            <Link to="/coursesDetails">mobile development</Link>
                            <Link to="/coursesDetails">graphics</Link>
                            <Link to="/coursesDetails">IT & Software</Link>
                            <Link to="/coursesDetails">Data Science</Link>
                            <Link to="/coursesDetails">Artificial Intelligence</Link>
                            <Link to="/coursesDetails">Photoshop Course</Link>
                            <Link to="/coursesDetails">Illustrator Course</Link>
                        </div>
                    </li>

                    <li className='mr-3'>
                        <div>
                            <Link to="/instructors" className='mr-0'>instructors</Link>
                        </div>
                    </li>

                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/about">about us</Link>
                    </li>


                    {/* User Registration */}
                    <div className="user-options">
                        <Link to='/signup' className="signup px-3 py-1 mr-2 mb-2">Sign Up</Link>
                        <Link to='/login' className="signup px-3 py-1 mb-2">Log In</Link>
                        {/* <Link to='/profile'><FaRegUser size={28} className="mr-3 mb-2 fauser" /></Link> */}
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

