import React from 'react'
import EFSR from '../images/EFSR.png'
import SOTE from '../images/salt of the earth.png'
import './PictureBox.css'
function PictureBox() {
    return (
        <div className='picture-box-container'>
            <img className='picture-box-img' src={EFSR}  /> 
            <img className='picture-box-img' src='https://www.mjseafood.com/assets/uploads/images/large/8188b638-0c38-4e25-a694-c2eb377285f1.jpg' /> 
            <img className='picture-box-img' src='https://www.mjseafood.com/assets/uploads/images/large/a96ecf67-e839-4fa0-b8ca-151dbfbd940d.jpg' />
            <img className='picture-box-img' src={SOTE}        />
        </div>
    )
}

export default PictureBox
