import React from 'react'

export default function Update() {
    
  return (
    <div className='update2'>
    <div className='update'>
        <div style={{margin: "20px"}}>
        <span class="close toggle" data-target="myPopup">close</span>
            <h1>Update</h1>
            <input className='form-input' type="text" placeholder='Name' /><br />
            <input className='form-input' type="text" placeholder='Description'/><br />
            <input type="file" id="myFile" name="filename"></input><br />
            <div className='btn_pos'>
            <button className='update_button'>UpDate</button>
            </div>


        </div>
    </div>
    </div>
  )
  
}
