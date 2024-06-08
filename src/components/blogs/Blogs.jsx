import React from 'react'
import './blogs.scss'
import blog1 from '../../assets/bg-1.png'
import blog2 from '../../assets/bg-2.png'
import blog3 from '../../assets/bg-3.png'
import button_img from '../../assets/north_east.png'

const Blogs = () => {
    return (
        <section className="blog" id="blogs">
            <div className="blog-text">
                <h1>Read My <span>blog</span></h1>
                <h5>Blogs</h5>
            </div>

            <div className="main-blog" >
                <div className="blog-sec">
                    <div className="blog-1">
                        <div className="blog-img">
                            <img src={blog1} />
                        </div>

                        <h5>11 November, 2023</h5>
                        <h1>12 unique examples of <br /> portfolio websites</h1>
                    </div>

                    <div className="blog-1">
                        <div className="blog-img">
                            <img src={blog2} />
                        </div>

                        <h5>11 November, 2023</h5>
                        <h1>12 unique examples of <br /> portfolio websites</h1>
                    </div>

                    <div className="blog-1">
                        <div className="blog-img">
                            <img src={blog3} />
                        </div>

                        <h5>11 November, 2023</h5>
                        <h1>12 unique examples of <br /> portfolio websites</h1>
                    </div>
                </div>

                <div className="blogs-btn">
                    <a href="#" className="mn-btn">Load more <span><img src={button_img} /></span></a>
                </div>
            </div>
        </section>
    )
}

export default Blogs