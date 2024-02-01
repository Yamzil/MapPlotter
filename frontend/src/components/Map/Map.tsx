import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import * as turf from "@turf/turf";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

const MapPage = ({ setRoundedArea , setMap}: any) => {
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

  const PostPolygones = async (data: any) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/add-plot/",
        { data },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Axios request error:", error);
    }
  };

  useEffect(() => {
    mapboxgl.accessToken = process.env
      .NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [-7.603869, 33.589886],
      zoom: 13,
    });
    setMap(map);
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
      defaultMode: "draw_polygon",
    });

    const AddPolygones = (data: any) => {
      data.forEach((element: any) => {
        map.addLayer({
          id: "maine" + element.id,
          type: "fill",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: element.data.coordinates,
              },
              properties: {},
            },
          },
          layout: {},
          paint: {
            "fill-color": "#088",
            "fill-opacity": 0.8,
          },
        });
      });
    };

    map.addControl(draw);
    map.addControl(new mapboxgl.NavigationControl());
    map.on("load", () => {
      if (plot) {
        AddPolygones(plot);
        plot.forEach((element: any) => {
          const area = turf.area(element.data);
          const rounded_area = Math.round(area * 100) / 100;
          setRoundedArea((prev: any) => [...prev, rounded_area]);
        });
      }
    });
    map.on("draw.create", updateArea);
    function updateArea(e: any) {
      const data = draw.getAll();
      PostPolygones(data.features[0].geometry);
    }
    return () => {
      if (map) map.remove();
    };
  }, [plot]);

  return (
    <div className="w-full">
      <div className="h-screen" id="map"></div>
    </div>
  );
};

export default MapPage;
