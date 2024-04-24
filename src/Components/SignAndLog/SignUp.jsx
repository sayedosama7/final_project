import React from 'react'
import Navbar from '../Navigation/NavBar'

const SignUp = () => {
    return (
        <div>
            <Navbar />
            <div>
                {/* <!-- ===================== -->
        <!-- start sign up section -->
        <!-- ===================== --> */}
                <div class="container">
                    <div class="row">

                        {/* <!-- =================== -->
                <!-- start image section -->
                <!-- =================== --> */}

                        <div class="col-md-6 divimage">
                            <h2 class="animate__animated animate__rollIn h2">Welcome to our largest community</h2>
                            <h6 class="animate__animated animate__rollIn h6">let's learn something new today!</h6>
                            <img src="./images/main-qimg-a55e1012efc46efb6f0590d85f1e837d-lq.jpg" class=" animate__animated animate__rollIn IMG" alt="..." />
                        </div>

                        {/* <!-- ================= -->
                <!-- end image section -->
                <!-- ================= --> */}


                        {/* <!-- ============= -->
                <!-- start sign up -->
                <!-- ============= --> */}
                        <div class="col-md-6 animate__animated animate__zoomInDown divsignup">
                            <h2 class="H2">Sign up for your <br />account!</h2>
                            <h6>Nice to see you! Please Sign up with your account.</h6>

                            <label class="LABEL">Email*</label>
                            <div class="input-box animate__animated animate__zoomInDown" >
                                <input type="email" class="PASSWORD" placeholder="E-mail " required />
                                <i class="fa-solid fa-envelope ICON"></i>
                            </div>

                            <label class="LABEL">Password*</label>
                            <div class="input-box animate__animated animate__zoomInDown">
                                <input type="password" class="PASSWORD" placeholder="********** " required />
                                <i class="fa-solid fa-lock ICON"></i>
                            </div>

                            <label class="LABEL">Confirm Password*</label>
                            <div class="input-box animate__animated animate__zoomInDown">
                                <input type="password" class="PASSWORD" placeholder="********** " required />
                                <i class="fa-solid fa-lock ICON"></i>
                            </div>

                            <div>
                                <button class="btn btn-primary BUTTON " type="submit">Save changes</button>
                            </div>

                        </div>
                        {/* <!-- =========== -->
                <!-- end sign up -->
                <!-- =========== --> */}



                        {/* <!-- =================================== --> */}

                        <div class="col-md-12">
                            <label class="checkbox">
                                {/* <input type="checkbox">  by signing up you agree to the terms of service</input> */}
                            </label>

                            <div>
                                <button class="btn btn-primary Sin" type="submit">Sign Up</button>
                            </div>

                            <div class="col-md-12 OR">
                                <hr class="col-md-5" />
                                <div class="col-md-2">
                                    or
                                </div>
                                <hr class="col-md-5" />
                            </div>

                            <div>
                                <button class="btn btn-primary divbutton" type="submit"><i class="fa-brands fa-google Icon"></i> Sign up with Google</button>
                            </div>

                            <div>
                                <button class="btn btn-primary divbutton" type="submit"><i class="fa-brands fa-facebook Icon"></i> Sign up with Facebook</button>
                            </div>

                            <div class="register-link animate__animated animate__fadeInUpBig">
                                <p class="p">
                                    Don't have an account?
                                    <a class="Register" href="#">Register</a>
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
                {/* <!-- =================== -->
        <!-- end sign up section -->
        <!-- =================== --> */}
            </div>
        </div>
    )
}

export default SignUp;