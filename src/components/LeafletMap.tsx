// import axios from "axios";
// import { nanoid } from "nanoid";
// import React from "react";
import { useQuery } from "react-query";

const LeafletMap = () => {
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

  console.log(data, "world wide data");
  console.log(data2, "country specific data");


  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  if (error2) return <div>Request Failed</div>;
  if (isLoading2) return <div>Loading...</div>;
  

  return <div>LeafletMap</div>;
};

export default LeafletMap;
