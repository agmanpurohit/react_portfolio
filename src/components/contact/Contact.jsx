import React from 'react'
import './contact.scss'

const Contact = () => {
    return (
        <section className="contact" id="contact" >
            <div className="cont-text">
                <h1>Contact Us</h1>
                <h5>you can contact me here</h5>
            </div>

            <div className="main-contact">
                <div className="main-fir">
                    <h5>- LET'S CONNECT</h5>
                    <h1>Reach out me</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything
                        that you want to run past me. You can contact anytime at 24/7</p>

                    <h4>+91 63750 26232</h4>
                    <h4>agmanpurohit@gmail.com</h4>
                    <h4>Ahmedabad, Gujarat, India</h4>
                </div>

                <div className="main-cont">
                    <h2>any project</h2>
                    <form action="">
                        <input type="text" placeholder="Enter your name" required /> <br />
                        <input type="email" placeholder="Enter your Email" required /> <br />
                        <input className="msg" type="message" placeholder="Enter your messaage" required />

                        <input type="submit" className="button" />
                    </form>
                </div>
            </div>
        </section >

    )
}

export default Contact