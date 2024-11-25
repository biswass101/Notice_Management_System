import React from 'react'
import cross from '../../assets/images/cross.png'
import no_select from '../../assets/images/no_select.png'
import Actions from '../Actions/Actions'
const Fileter = () => {
  return (
    <>
        <div className="filter-container flex flex-col gap-6">
            <p className='text-4xl font-sans font-bold'>Filter</p>
            <div className="action-name-cancellation-container flex border">
                <p className=''>All</p>
                <img src={cross} alt="cross-logo" />
            </div>
            <div className="actions flex flex-col gap-6">
                <Actions cls="All" img_src = {no_select} title="All"/>
                <Actions cls="Assignment" img_src = {no_select} title="Assignment"/>
                <Actions cls="LabReport" img_src = {no_select} title="Lab Report"/>
                <Actions cls="ClassTest" img_src = {no_select} title="Class Test"/>
                <Actions cls="Presentation" img_src = {no_select} title="Presentation"/>
                <Actions cls="Exam" img_src = {no_select} title="Exam"/>
                <Actions cls="ClassroomCode" img_src = {no_select} title="Classroom Code"/>
                <Actions cls="Other" img_src = {no_select} title="Other"/>
            </div>
        </div>
    </>
  )
}

export default Fileter