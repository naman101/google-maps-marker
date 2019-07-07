import React from 'react'
import './Marker.css'
import { Icon } from 'antd'

const Marker = () => {
  return(
    <div>
      <div className="marker-box">
        <Icon type="alert"
          style={{
            color: 'white',
            fontSize: '20px',
            margin: '5px'
          }}
        />
      </div>
      <div className="marker-bottom" />
    </div>
  )
}

export default Marker
