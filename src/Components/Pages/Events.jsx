/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import Navbar from '../Navigation/NavBar'
import { useLocation } from 'react-router';

function CourseDetails() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        event
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails