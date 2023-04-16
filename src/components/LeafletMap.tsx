// import axios from "axios";
// import { nanoid } from "nanoid";
// import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
// import MapWrapper from "./MapWrapper";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import tileLayer from "./utils/tileLayer";

import L from "leaflet"; // Same as `import * as L from 'leaflet'` with webpack
import "leaflet/dist/leaflet.css";

const center = [52.22977, 21.01178] as any;
const colors = ["fe4848", "fe6c58", "fe9068", "feb478", "fed686"];

const points = [
  {
    lat: 33,
    lng: 65,
    title: "AF",
  },
  {
    lat: 41,
    lng: 20,
    title: "ALB",
  },
  {
    lat: 28,
    lng: 3,
    title: "DZA",
  },
  {
    lat: 52.23040500771883,
    lng: 21.012146472930908,
    title: "hello_",
  },
];

function customMarkerIcon(color: any) {
  const svgTemplate = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker">
      <path fill-opacity=".25" d="M16 32s1.427-9.585 3.761-12.025c4.595-4.805 8.685-.99 8.685-.99s4.044 3.964-.526 8.743C25.514 30.245 16 32 16 32z"/>
      <path fill="#${color}" stroke="#fff" d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6a4 4 0 100 8 4 4 0 000-8z"/>
    </svg>`;

  return new L.DivIcon({
    className: "test",
    html: svgTemplate,
    iconSize: [40, 40],
    iconAnchor: [12, 24],
    popupAnchor: [7, -16],
  });
}

const MyMarkers = ({ data, data2 }: any) => {
  console.log(data2, "country specific marker");

  let thisPoints = [] as any;
  data2.map((item: any) =>
    thisPoints.push({
      country: item.country,
      lat: item.countryInfo.lat,
      lng: item.countryInfo.long,
      active: item.active,
      deaths: item.deaths,
      recovered: item.recovered,
    })
  );
  console.log(thisPoints, "thisPoints");

  return thisPoints.map(
    ({ lat, lng, country, active, deaths, recovered }: any, index: any) => (
      <Marker
        key={index}
        position={[lat, lng]}
        icon={customMarkerIcon("B2022F")}
      >
        <Popup>
          <p className="text-[#323232] font-medium">{country}</p>
          <p className="text-yellow-600 text-xs">Active: <span className="font-medium">{active}</span></p>
          <p className="text-red-600 text-xs">Deaths: <span className="font-medium">{deaths}</span></p>
          <p className="text-green-600 text-xs">Recovered: <span className="font-medium">{recovered}</span></p>
        </Popup>
      </Marker>
    )
  );
};

const LeafletMap = () => {
  const [markerData, setMarkerData] = useState([]);

  const {
    data: data,
    error: error,
    isLoading: isLoading,
  } = useQuery("getWorldWideData", async () => {
    const res = await fetch("https://disease.sh/v3/covid-19/all");
    return res.json();
  });

  const {
    data: data2,
    error: error2,
    isLoading: isLoading2,
  } = useQuery("getCountryData", async () => {
    const res = await fetch("https://disease.sh/v3/covid-19/countries");
    return res.json();
  });

  // console.log(data, "world wide data");
  console.log(data2, "country specific data");

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  if (error2) return <div>Request Failed</div>;
  if (isLoading2) return <div>Loading...</div>;

  return (
    <div>
      <MapContainer
        className="map"
        center={center}
        zoom={5}
        scrollWheelZoom={true}
      >
        <TileLayer {...tileLayer} />

        <MyMarkers data={points} data2={data2} />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
