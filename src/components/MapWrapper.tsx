import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import tileLayer from './utils/tileLayer';

import L from 'leaflet'; // Same as `import * as L from 'leaflet'` with webpack
import 'leaflet/dist/leaflet.css';


const center = [52.22977, 21.01178] as any;

const points = [
  {
    lat: 33,
    lng: 65,
    title: 'AF'
  },
  {
    lat: 52.22924516170657,
    lng: 21.011320352554325,
    title: 'point 2'
  },
  {
    lat: 52.229511304688444,
    lng: 21.01270973682404,
    title: 'point 3'
  },
  {
    lat: 52.23040500771883,
    lng: 21.012146472930908,
    title: 'point 4'
  },
];

const MyMarkers = ({ data }:any) => {
  return data.map(({ lat, lng, title }:any, index:any) => (
    <Marker
      key={index}
      position={{ lat, lng }}
    >
      <Popup>{title}</Popup>
    </Marker>
  ));
}

const MapWrapper = ({data2}:any) => {


  
  return (
    <MapContainer className='map' center={center} zoom={2} scrollWheelZoom={true}>

      <TileLayer {...tileLayer} />

      <MyMarkers data={points} />

    </MapContainer>
  )
}

export default MapWrapper;