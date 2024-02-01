"use client";
import Expoitation from "components/Map/Exploitations/Exploitations";
import Parcelles from "components/Map/Parcelles/Parcelles";
import MapPage from "components/Map/Map";
import { useState } from "react";

export default function Home() {
  const [roundedArea, setRoundedArea] = useState([]);
  const [map, setMap] = useState(null);

  return (
    <div className="flex justify-between border-2 border-black h-screen w-screen overflow-x-hidden overflow-y-hidden">
      <Expoitation />
      <Parcelles roundedArea={roundedArea} map={map} />
      <MapPage setRoundedArea={setRoundedArea} roundedArea={roundedArea} setMap={setMap} />
    </div>
  );
}
