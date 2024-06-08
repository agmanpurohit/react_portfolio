import React from 'react'
import './home.scss'
import north_east from '../../assets/north_east.png'

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-text">
                <h3>Hi, There!</h3>
                <h1>I'm Agman Purohit</h1>
                <h4>Web Designer <span>based in </span> Ahmedabad</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nam aut nihil. A rem consectetur veniam
                    molestiae praesentium quam animi!</p>

                <div className="social-icon">
                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                    <a href="#"><i className='bx bxl-github'></i></a>
                </div>

                <div className="main-btn">
                    <a href="#" className="mn-btn">Let's talk with me! <span><img src={north_east} /></span></a>
                </div>

                <div className="scroll">
                    <a href="#about"><i className='bx bx-chevrons-down'></i>Scroll Down</a>
                </div>
            </div>

        </section>
    )
}

export default Home