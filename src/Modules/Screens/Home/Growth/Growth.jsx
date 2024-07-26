import React from 'react'
import './Growth.css'
import { useNavigate } from 'react-router-dom'

const Growth = () => {
  const navigate = useNavigate()
  return (
    <div className='growthMain'>
        <div className="growthLeft">
            <div className="growthLeftTitle">
            Growth strategies to be effective & competitive
            </div>
            <div className="growthLeftDescription">
            Everything we do and dream up has a solid design impact. We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps.
            </div>
            <div className="growthLeftButton">
                <button onClick={()=> navigate('/contact')}>Get Started</button>
            </div>
        </div>
        <div className="growthRight">
            <img src="https://res.cloudinary.com/dqcr5yn0b/image/upload/v1721992320/people-business-character-with-activities-free-vector_qklt6v.jpg" alt="" width={500} />
        </div>
    </div>
  )
}

export default Growth