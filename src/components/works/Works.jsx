import React from 'react'
import './works.scss'
import work_icon from '../../assets/works-icon.png'
import work1 from '../../assets/Img-1.png'
import work2 from '../../assets/Img-2.png'
import work3 from '../../assets/Img-3.png'
import work4 from '../../assets/Img-4.png'

const Works = () => {
    return (
        <section className="works" id="works">
            <div className="work-cent">
                <h1><span>Recent</span> Projects</h1>
                <h5>We can do it</h5>
            </div>

            <div className="main-works" >
                <div className="smpl-1">
                    <div className="part-1">
                        <h6>UX case study</h6>
                        <h1>Bally <br /> Website <br />
                            Research</h1>
                        <div className="wk-icon">
                            <img src={work_icon} />
                        </div>
                    </div>

                    <div className="work-img">
                        <img src={work1} />
                    </div>
                </div>

                <div className="smpl-1">
                    <div className="part-2">
                        <h6>UX case study</h6>
                        <h1>Bally <br /> Website <br />
                            Research</h1>
                        <div className="wk-icon">
                            <img src={work_icon} />
                        </div>
                    </div>

                    <div className="work-img">
                        <img src={work2} />
                    </div>
                </div>

                <div className="smpl-1">
                    <div className="part-3">
                        <h6>UX case study</h6>
                        <h1>Bally <br /> Website <br />
                            Research</h1>
                        <div className="wk-icon">
                            <img src={work_icon} />
                        </div>
                    </div>

                    <div className="work-img">
                        <img src={work3} />
                    </div>
                </div>

                <div className="smpl-1">
                    <div className="part-4">
                        <h6>UX case study</h6>
                        <h1>Bally <br /> Website <br />
                            Research</h1>
                        <div className="wk-icon">
                            <img src={work_icon} />
                        </div>
                    </div>

                    <div className="work-img">
                        <img src={work4} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works