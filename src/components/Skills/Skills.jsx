import React from 'react'
import DataAnalyst from './DataAnalyst'
import PowerBI from './PowerBI'
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className='section__title'>Skills</h2>
        <span className='section__subtitle'>My Technical Level</span>
          <div className="skills__container container grid">
            <DataAnalyst />
            <PowerBI />
          </div>
    </section>
  )
}

export default Skills