import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occured while loading data");
    throw error;
  }
  return response.json();
  // const data = await response.json();
  // return data;
}

export default function ISSTracker() {
  const {
    data: coords,
    isLoading,
    error,
    mutate,
  } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  if (isLoading || !coords) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
