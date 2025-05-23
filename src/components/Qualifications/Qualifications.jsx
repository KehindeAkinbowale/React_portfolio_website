import React from 'react'
import './Qualifications.css'
import { useState } from 'react';

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);
    
        const toggleTab = (index) => {
            setToggleState(index);
        }
  return (
    <section className="qualification section">
         <h2 className='section__title'>Qualification</h2>
         <span className='section__subtitle'>My personal journey </span>
         <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                className={toggleState === 1 ? "qualification__button qualification__active button--flex": 
                    "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>
                <div 
                className={toggleState === 2 ? "qualification__button qualification__active button--flex": 
                "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active": "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className='qualification__title'>African Industries Group</h3>
                            <span className="qualification__subtitle">Lekki, Nigeria</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2021 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>Administrative Officer</h3>
                            <span className="qualification__subtitle">Greater Washington Express </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2019 - 2021
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className='qualification__title'>Administrative Officer</h3>
                            <span className="qualification__subtitle">Hazon Holding Ltd</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2017-2018 
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>Adminstrative Officer</h3>
                            <span className="qualification__subtitle">Ouvere design</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2018 -2020
                            </div>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 2 ? "qualification__content qualification__content-active": "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className='qualification__title'>Web designer</h3>
                            <span className="qualification__subtitle"> Microsoft - Nigeria</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2018 - 2020
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>Business Manager</h3>
                            <span className="qualification__subtitle">Apple Inc - New York </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2015 - 2021
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className='qualification__title'>Brand Manager</h3>
                            <span className="qualification__subtitle">Figma - Spain</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender-alt"></i>2011- 2014
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </section>
  )
}

export default Qualifications