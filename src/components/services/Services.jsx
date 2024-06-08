import React from 'react'
import './services.scss'

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="serv-center" >
                <h1>My <span>Specialities</span></h1>
                <h5>Services</h5>
            </div>

            <div className="main-serv" >
                <div className="serv-one">
                    <div className="serv">
                        <i className='bx bx-mobile-alt'></i>
                        <h4>Web Design</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, quaerat odio? Maiores dolore
                            eligendi soluta.</p>
                        <div className="serv-btn">
                            <a href="#">Read more...</a>
                        </div>
                    </div>
                </div>

                <div className="serv-one">
                    <div className="serv">
                        <i className='bx bx-code-alt'></i>
                        <h4>UI/UX Design</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, quaerat odio? Maiores dolore
                            eligendi soluta.</p>
                        <div className="serv-btn">
                            <a href="#">Read more...</a>
                        </div>
                    </div>
                </div>

                <div className="serv-one">
                    <div className="serv">
                        <i className='bx bx-signal-5'></i>
                        <h4>Digital Marketing</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, quaerat odio? Maiores dolore
                            eligendi soluta.</p>
                        <div className="serv-btn">
                            <a href="#">Read more...</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services