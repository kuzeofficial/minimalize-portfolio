import React,{ useRef } from 'react'

function Switch() {
    const ref = useRef('null')
    function handleChange(){
        if (ref.current.checked){
            document.body.classList.remove('light-mode')
            document.body.classList.add('dark-mode')
        }   
        else{
            document.body.classList.remove('dark-mode')
            document.body.classList.add('light-mode')
        }
    }
    return (
        <div className="dark-mode" >
            <p className="dark-mode-title"></p>
            <input ref={ref} onChange={handleChange} type="checkbox" className="checkbox" id="checkbox"/>
            <label className="switch" htmlFor="checkbox"/>            
        </div>
    )
}

export default Switch

