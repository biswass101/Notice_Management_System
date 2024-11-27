import React, { useState } from 'react'
import cross from '../../assets/images/cross.png'
import no_select from '../../assets/images/no_select.png'
import select from '../../assets/images/Select.png'
import Actions from '../Actions/Actions'
const selectedActions = ["All"]
const Fileter = () => {
  const[actName, setActName] = useState('All')
  return (
    <>
        <div className="filter-container flex flex-col gap-6 w-[250px]">
            <p className='text-4xl font-sans font-bold'>Filter</p>
            <div className="action-name-cancellation-container flex justify-between border border-[#000000] max-w-[200px] rounded p-3">
                <p className=''>{actName}</p>
                <img src={cross} alt="cross-logo"/>
            </div>
            <div className="actions flex flex-col gap-6">
                <Actions selectedActions = {selectedActions} setActName={setActName} cls="All" img_src = {select} title="All"/>
                <Actions selectedActions = {selectedActions} setActName={setActName} cls="Assignment" img_src = {no_select} title="Assignment"/>
                <Actions selectedActions = {selectedActions} setActName={setActName} cls="LabReport" img_src = {no_select} title="Lab Report"/>
                <Actions selectedActions = {selectedActions} setActName={setActName} cls="ClassTest" img_src = {no_select} title="Class Test"/>
                <Actions selectedActions = {selectedActions} setActName={setActName} cls="Presentation" img_src = {no_select} title="Presentation"/>
                <Actions selectedActions = {selectedActions} setActName={setActName} cls="Exam" img_src = {no_select} title="Exam"/>
                <Actions selectedActions = {selectedActions} setActName={setActName} cls="ClassroomCode" img_src = {no_select} title="Classroom Code"/>
                <Actions selectedActions = {selectedActions} setActName={setActName} cls="Other" img_src = {no_select} title="Other"/>
            </div>
        </div>
    </>
  )
}

export default Fileter