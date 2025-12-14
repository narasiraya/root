"use client";
import { useRef } from "react";
import MapGL, { type MapRef, Marker } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { Badge } from "./ui/badge";

export function MapCard() {
  const mapRef = useRef<MapRef>(null);

  const LNG = 122.2636;
  const LAT = -0.9106;

  return (
    <section className="space-y-1">
      <h2 className="font-medium text-lg">Lokasi</h2>
      <div className="relative h-90 w-full overflow-clip rounded-2xl">
        <Badge variant="outline" className="absolute backdrop-blur-sm top-4 right-4 z-30">
          Banggai, Sulawesi Tengah
        </Badge>
        <MapGL
          ref={mapRef}
          initialViewState={{
            longitude: LNG,
            latitude: LAT,
            zoom: 4,
            pitch: 0,
          }}
          onLoad={() => {
            mapRef.current?.flyTo({
              center: [LNG, LAT],
              zoom: 12,
              pitch: 70,
              duration: 3000,
            });
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="https://tiles.openfreemap.org/styles/bright"
        >
          <Marker longitude={LNG} latitude={LAT} anchor="center">
            <div className="relative flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-primary"></span>
            </div>
          </Marker>
        </MapGL>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-1/2 bg-linear-to-t from-white via-white to-transparent" />
      </div>
    </section>
  );
}
