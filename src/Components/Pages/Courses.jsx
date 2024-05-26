import React, { useEffect, useState } from 'react'
import Navbar from '../Navigation/NavBar'
import Footer from '../Navigation/Footer'
// import { MdOutlineSlowMotionVideo } from 'react-icons/md'
// import { CiClock2 } from 'react-icons/ci'
import { Link, useLocation } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'
import axios from 'axios'

const Courses = () => {

    const { pathname } = useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/allcategories');
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    // const courses = [
    //     {
    //         "id": "1",
    //         "name": 'web development',
    //         "img": "/images/Courses/course-1.jpg",
    //         "description": "Some Quick Example Text To Build On The Card Title And Make Up",
    //         "video": "40",
    //         "hours": "150",
    //         "link": "/coursesDetails",
    //     },
    //     {
    //         "id": "2",
    //         "name": 'mobile development',
    //         "img": "/images/Courses/mobile.jpg",
    //         "description": "Some Quick Example Text To Build On The Card Title And Make Up",
    //         "video": "30",
    //         "hours": "100",
    //         "link": "/coursesDetails",
    //     },
    //     {
    //         "id": "3",
    //         "name": 'graphics',
    //         "img": "/images/Courses/graphics.jpeg",
    //         "description": "Some Quick Example Text To Build On The Card Title And Make Up",
    //         "video": "60",
    //         "hours": "70",
    //         "link": "/coursesDetails",
    //     },
    //     {
    //         "id": "4",
    //         "name": 'IT & Software',
    //         "img": "/images/Courses/software.webp",
    //         "description": "Some Quick Example Text To Build On The Card Title And Make Up",
    //         "video": "50",
    //         "hours": "100",
    //         "link": "/coursesDetails",
    //     },
    //     {
    //         "id": "5",
    //         "name": 'Data Science',
    //         "img": "/images/Courses/course-1.jpg",
    //         "description": "Some Quick Example Text To Build On The Card Title And Make Up",
    //         "video": "40",
    //         "hours": "120",
    //         "link": "/coursesDetails",
    //     },
    //     {
    //         "id": "6",
    //         "name": 'Artificial Intelligence',
    //         "img": "/images/Courses/ai.jpeg",
    //         "description": "Some Quick Example Text To Build On The Card Title And Make Up",
    //         "video": "45",
    //         "hours": "5",
    //         "link": "/coursesDetails",
    //     },
    //     {
    //         "id": "7",
    //         "name": 'Photoshop Course',
    //         "img": "/images/Courses/photoshop.webp",
    //         "description": "Some Quick Example Text To Build On The Card Title And Make Up",
    //         "video": "30",
    //         "hours": "100",
    //         "link": "/coursesDetails",
    //     },
    //     {
    //         "id": "8",
    //         "name": 'Illustrator Course',
    //         "img": "/images/Courses/course-1.jpg",
    //         "description": "Some Quick Example Text To Build On The Card Title And Make Up",
    //         "video": "20",
    //         "hours": "70",
    //         "link": "/coursesDetails",
    //     },

    // ];
    return (
        <div>
            <Navbar />
            <div className="container all-courses">
                <div className="row">
                    {/* head Banar  */}
                    <div className='d-flex justify-content-between my-5 title-all'>

                        <div className='m-auto position-relative'>
                            <img className='img-fluid tag' src="/images/instructors/tag-2.png" alt="" />
                            <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">Our courses</h2>
                            <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
                                Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
                            </p>
                        </div>

                        <img className='img-fluid wow fadeInDown' data-wow-delay=".3s" src="/images/instructors/instructors-banner.png" alt="" />
                    </div>

                    {/* start Course Card */}
                    {data.map((data) => (
                        <div key={data.id} className="rounded-2  wow fadeInUp">
                            <div className="box d-flex">
                                <div className=' position-relative'>
                                    <img
                                        src={`http://127.0.0.1:8000/categories/img/${data.cate_image}`}
                                        style={{ height: "230px" }}
                                        className="img-fluid rounded-2 " alt="Courses" />
                                    <img className="logo position-absolute rounded-circle p-3" src="./images/logo.jpeg" alt="logo" />
                                </div>
                                {/* Start course details */}
                                <div >
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">{data.name}</h5>
                                        <p className="text-muted w-75">{data.description}</p>
                                        {/* <h5 className='text-primary'>instructor name</h5>
                                        <p className="text-muted">{data.instructor_name}ahmed hatem</p> */}
                                        <div className="d-flex justify-content-start align-items-center">
                                            <Link to={data.link} className="text-primary fw-bold text-decoration-none mr-2">read more</Link>
                                            <i className="fas fa-arrow-left text-primary fw-bold animate__animated animate__headShake animate__infinite"></i>
                                        </div>
                                    </div>

                                    {/* <div className="d-flex justify-content-around">
                                    <div className="d-flex">
                                        <MdOutlineSlowMotionVideo className="text-danger" size={30} />
                                        <p className="ml-1 mt-1">{data.video} vidoes</p>
                                    </div>
                                    <div className="d-flex">
                                        <CiClock2 className="mt-1 text-danger" size={30} />
                                        <p className="ml-1 mt-1">{data.hours}+Hours</p>
                                    </div>
                                </div> */}

                                </div>
                            </div>
                            <hr className='' />
                        </div>
                    ))}
                    {/* End Course Card */}

                </div>
            </div>
            <ScrollToTop smooth
                color='#fff'
                style={{ backgroundColor: '#372B73' }}
                className='animate__animated animate__flash animate__infinite	infinite animate__slower'
            />
            <Footer />
        </div>
    )
}

export default Courses