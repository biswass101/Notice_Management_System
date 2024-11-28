import React, { useState } from 'react'
import cross from '../../assets/images/cross.png'
import no_select from '../../assets/images/no_select.png'
import select from '../../assets/images/Select.png'
import Actions from '../Actions/Actions'
const selectedActions = []
const Fileter = ({setQueryParams}) => {
  const[actName, setActName] = useState('All')
  return (
    <>
        <div className="filter-container flex flex-col gap-6 w-[250px]">
            <p className='text-4xl font-sans font-bold'>Filter</p>
            {selectedActions.length > 0 ? <div className="action-names-container flex flex-wrap gap-1 border border-slate-200 max-w-[200px] rounded p-2">
                {selectedActions.map((actName, idx) => <div key={idx} className = {`${idx % 2 == 0 ? 'text-black' : 'text-[#2E90FA]'} bg-slate-100 px-2 rounded`}>{actName}</div>)}
                {/* <img src={cross} alt="cross-logo"/> */}
            </div> : null}
            <div className="actions flex flex-col gap-6">
                {/* <Actions selectedActions = {selectedActions} setActName={setActName} cls="All" img_src = {select} title="All"/> */}
                <Actions setQueryParams = {setQueryParams} selectedActions = {selectedActions} setActName={setActName} cls="assignment" img_src = {no_select} title="Assignment"/>
                <Actions setQueryParams = {setQueryParams} selectedActions = {selectedActions} setActName={setActName} cls="lab_report" img_src = {no_select} title="Lab Report"/>
                <Actions setQueryParams = {setQueryParams} selectedActions = {selectedActions} setActName={setActName} cls="class_test" img_src = {no_select} title="Class Test"/>
                <Actions setQueryParams = {setQueryParams} selectedActions = {selectedActions} setActName={setActName} cls="presentation" img_src = {no_select} title="Presentation"/>
                <Actions setQueryParams = {setQueryParams} selectedActions = {selectedActions} setActName={setActName} cls="exam" img_src = {no_select} title="Exam"/>
                <Actions setQueryParams = {setQueryParams} selectedActions = {selectedActions} setActName={setActName} cls="classroom_code" img_src = {no_select} title="Classroom Code"/>
                {/* <Actions selectedActions = {selectedActions} setActName={setActName} cls="Other" img_src = {no_select} title="Other"/> */}
            </div>
        </div>
    </>
  )
}

export default Fileter