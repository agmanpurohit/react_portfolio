import React from 'react'
import './about.scss'
import profile_img from '../../assets/About.png'
import button_img from '../../assets/north_east.png'

const About = () => {
    return (
        <section className="about" id="about">
            <div className="about-center" >
                <h5>Nice to meet you!</h5>
                <h1><span>Welcome </span>to..</h1>
            </div>

            <div className="about-sec">
                <div className="about-img">
                    <img src={profile_img} />
                </div>

                <div className="about-text">
                    <h6>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</h6>
                    <hr />

                    <div className="experience">
                        <div className="Ex1">
                            <div className="ex2">
                                <div className="yr">
                                    <h1 className="ten">1+</h1>
                                </div>
                                <div className="yr-text">
                                    <h5>Years <br /> experience</h5>
                                </div>
                            </div>
                            <p>Hello there! My name is Agman Purohit. I am a Web designer & Developer, and I'm very
                                passionate and dedicated to my work.</p>
                        </div>

                        <div className="Ex1">
                            <div className="ex2">
                                <div className="yr">
                                    <h1 className="ten">1+</h1>
                                </div>
                                <div className="yr-text">
                                    <h5>Clients <br /> experience</h5>
                                </div>
                            </div>
                            <p>With 1+ year experience as a professional a graphic designer, I have acquired the skills and
                                knowledge necessary to make your project a success.</p>
                        </div>
                    </div>



                    <div className="main-btn">
                        <a href="#" className="mn-btn">Download CV<span><img src={button_img} /></span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About