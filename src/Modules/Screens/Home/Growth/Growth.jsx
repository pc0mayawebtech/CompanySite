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
            <img src="https://preview.codeless.co/converta/default/wp-content/uploads/2023/03/img-re.jpeg" alt="" width={500} />
        </div>
    </div>
  )
}

export default Growth