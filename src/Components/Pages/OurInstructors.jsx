import Navbar from '../Navigation/NavBar';
import Footer from '../Navigation/Footer';

const OurInstructors = () => {
  const instrutors = [
    {
      "name": "name",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "job title",
      "img_url": "/images/instructors/instructors.jpeg",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },
    {
      "name": "name",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "job title",
      "img_url": "/images/instructors/instructors.jpeg",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },
    {
      "name": "name",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "job title",
      "img_url": "/images/instructors/instructors.jpeg",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },
    {
      "name": "name",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "job title",
      "img_url": "/images/instructors/instructors.jpeg",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },
    {
      "name": "name",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "job title",
      "img_url": "/images/instructors/instructors.jpeg",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },
    {
      "name": "name",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "job title",
      "img_url": "/images/instructors/instructors.jpeg",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },
    {
      "name": "name",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "job title",
      "img_url": "/images/instructors/instructors.jpeg",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },
    {
      "name": "name",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus",
      "job_title": "job title",
      "img_url": "/images/instructors/instructors.jpeg",
      "facebook": "https://www.facebook.com/",
      "twitter": "https://www.twitter.com/",
      "linkedin": "https://www.linkedin.com/",
      "instagram": "https://www.instagram.com/"
    },

  ]

  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className='d-flex justify-content-between mb-5 instructor_title'>
          <div className='m-auto position-relative'>
            <img className='img-fluid tag' src="/images/instructors/tag-2.png" alt="" />
            <h2 className='main-title text-primary mb-2 wow fadeInLeft' data-wow-delay=".3s">Our Instructors</h2>
            <p className='text-muted fw-bold mb-5 wow fadeInUp' data-wow-delay=".4s" data-wow-duration="3s">
              Our role here has increased more and this is so that we can benefit the students who are with us in our courses.
            </p>
          </div>
          <img className='img-fluid wow fadeInDown' data-wow-delay=".3s" src="/images/instructors/instructors-banner.png" alt="" />
        </div>

        <div className="row">

          {instrutors.map((instructor, index) => (

            <div key={index} className='col-md-12 col-lg-6 rounded mb-4 wow fadeInUp instructors-card' data-wow-delay=".3s">
              <div className="instrctors p-3">
                <div className="col-md-12 instrctors-left d-flex">
                  <div className='col-md-12 col-lg-4 m-auto'>
                    <img className='img-fluid rounded-circle' src={instructor.img_url} alt="instructors" />
                  </div>

                  <div className='col-md-12 col-lg-8'>
                    <div className='ml-2 instructors-caption'>
                      <h4 className='text-primary'>{instructor.name}</h4>
                      <p className='text-muted'>{instructor.description}</p>
                      <div className='d-flex justify-content-between align-items-center instrctors-right'>
                        <h5 className='text-primary'>{instructor.job_title}</h5>
                        {/* instructors-icons */}
                        <div className='instructors-icons'>
                          <a href={instructor.facebook} target='_blank' rel="noreferrer"><i className='fab fa-facebook text-primary p-2'></i></a>
                          <a href={instructor.instagram} target='_blank' rel="noreferrer"><i className='fab fa-instagram text-primary p-2'></i></a>
                          <a href={instructor.twitter} target='_blank' rel="noreferrer"><i className='fab fa-twitter text-primary p-2'></i></a>
                          <a href={instructor.linkedin} target='_blank' rel="noreferrer"><i className='fab fa-linkedin text-primary p-2'></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurInstructors;
