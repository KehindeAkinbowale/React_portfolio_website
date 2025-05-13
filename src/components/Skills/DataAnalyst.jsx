import React from 'react'

const DataAnalyst = () => {
  return (
    <div className='skills__content'>
        <h3 className='skills__title'>Data Analyst</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                 <i className='bx bx-badge-check'></i>
                 <div>
                    <h3 className="skills__name">Excel</h3>
                    <span className="skills__level">Intermediate</span>
                 </div>
                </div>
                <div className="skills__data">
                 <i className='bx bx-badge-check'></i>
                 <div>
                    <h3 className="skills__name">PowerBI</h3>
                    <span className="skills__level">Advanced </span>
                 </div>
                </div> 
                <div className="skills__data">
                 <i className='bx bx-badge-check'></i>
                 <div>
                    <h3 className="skills__name">Machine Learning</h3>
                    <span className="skills__level">Advanced</span>
                 </div>
                </div> 
            </div>
            <div className="skills__group">
                <div className="skills__data">
                 <i className='bx bx-badge-check'></i>
                 <div>
                    <h3 className="skills__name">Database</h3>
                    <span className="skills__level">Intermediate</span>
                 </div>
                </div>
                <div className="skills__data">
                 <i className='bx bx-badge-check'></i>
                 <div>
                    <h3 className="skills__name">mySQL</h3>
                    <span className="skills__level">Master</span>
                 </div>
                </div> 
                <div className="skills__data">
                 <i className='bx bx-badge-check'></i>
                 <div>
                    <h3 className="skills__name">postSQL</h3>
                    <span className="skills__level">Intermediate</span>
                 </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default DataAnalyst