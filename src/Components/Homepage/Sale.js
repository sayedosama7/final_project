import React from 'react'
import NavBar from '../Components/NavBar'

const Sale = () => {
    return (
        <div>
        <NavBar/>
            <div className="container-fluid sale">
                <div className="row">
                    <div className="col-md-12 mr-5 sale-title">
                        <h2 className="h1 text-dark fw-bolder mb-4">December sale is on! <br />
                            with big <span className="text-warning">Discount...</span></h2>
                        <h4 className="d-flex text-dark">
                            <div className="sale-count pt-3">
                                <p>Sale!</p>
                                <p>Upto</p>
                            </div>
                            <span className="fw-bolder text-warning h1 sale-count-num mx-3">50%</span>
                            <span className="pt-5">off</span>
                        </h4>
                        <button className="btn btn-warning btn-lg mt-4 fw-bold rounded-pill">shop now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sale