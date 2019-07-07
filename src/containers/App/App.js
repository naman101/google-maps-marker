import React, { useState } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import Console from '../../components/Console'
import Marker from '../../components/Marker'
import { Row, Col } from 'antd';

const App = () => {
  const [mapLatitude, updateMarkerLatitude] = useState(null)
  const [mapLongitude, updateMarkerLongitude] = useState(null)

  const updateLatLong = (lat, long) => {
    updateMarkerLatitude(lat)
    updateMarkerLongitude(long)
  }

  const center = {
    lat: 20.5937,
    lng: 78.9629
  }
  const zoom = 6

  return (
    <div className="App">
      <Row>
        <Col span={4}>
          <div>
            <Console updateLatLong={updateLatLong}/>
          </div>
        </Col>
        <Col span={20}>
          <div className="google-maps">
            <GoogleMapReact
              bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}`}}
              defaultCenter={center}
              defaultZoom={zoom}
            >
            <Marker
              lat={mapLatitude}
              lng={mapLongitude}
            />
            </GoogleMapReact>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default App;
