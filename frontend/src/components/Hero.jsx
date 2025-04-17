import React from 'react'


function Hero(props) {
  return (
    <>
    <div className="container-fluid page-header">
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "400px"}}>
                <h3 className="display-4 text-white text-uppercase">{props.page}</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">{props.page}</p>
                </div>
            </div>
        </div>
       
    </div>
      
    </>
  )
}

export default Hero
