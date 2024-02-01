"use client";
import { useEffect, useState } from "react";
import * as turf from "@turf/turf";
import axios from "axios";

export default function Parcelles({ roundedArea, map }: any) {
  const [plot, setPlot] = useState<any>();
  useEffect(() => {
    const GetPolygones = async () => {
      try {
        const res = await axios.get("http://localhost:8000/get-plot/");
        if (res.status === 200) {
          setPlot(res.data.data);
        }
      } catch (error) {
        console.error("Axios request error:", error);
      }
    };
    GetPolygones();
  }, []);

  return (
    <div className="w-full border-2 border-black flex flex-col">
      <h2 className="text-center bg-green-700 p-5 text-white text-xl font-bold mb-5">
        Parcelles
      </h2>
      {plot && plot.map((element: any) => {
        const center = turf.center(turf.points(element.data.coordinates[0]));
        return (
          <button
            className="bg-green-700 text-white p-4 rounded-md m-2 text-bold text-[32px]" 
            onClick={() => {
              map.flyTo({ center: center.geometry.coordinates, zoom: 14 });
            }}
          >
            Area : {turf.round(roundedArea)} m²
          </button>
        );
      })}
    </div>
  );
}
