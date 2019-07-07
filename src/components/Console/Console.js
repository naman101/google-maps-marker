import React, { useState, useEffect } from 'react'
import './Console.css'
import CarsData from '../../generated.json'
import { Row, Col } from 'antd'

const Console = ({updateLatLong}) => {

  const [currentCar, updateCurrentCar] = useState(CarsData[0]._id)
  const [lat, updatelat] = useState(CarsData[0].latitude)
  const [long, updateLong] = useState(CarsData[0].longitude)

  const handleOnClick = (id, lat, long) => {
    updateCurrentCar(id)
    updatelat(lat)
    updateLong(long)
  }

  useEffect(() => {
    updateLatLong(lat, long)
  })

  const renderCars = CarsData.map(cars =>
    <div
      key={cars._id}
      className="cars-content"
      onClick={() => handleOnClick(cars._id, cars.latitude, cars.longitude)}
      style={{
        backgroundColor: cars._id === currentCar ? '#f6f8fa' : 'white'
      }}
    >
      <Row type="flex" justify="start" align="middle">
        <Col offset={4}>
          <div
            className="car-status"
            style={{
              backgroundColor: cars.carColor
            }}
          />
        </Col>
        <Col offset={4}>
          <div className="car-name">
            {cars.carName}
          </div>
        </Col>
      </Row>
    </div>
  )
  return (
    <div className="console-container">
      {renderCars}
    </div>
  )
}

export default Console;
