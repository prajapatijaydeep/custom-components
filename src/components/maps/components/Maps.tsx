import { useState } from "react";
import "leaflet/dist/leaflet.css";
import BlackMark from "@/icons/mapsvgicons/BlackLocator.svg";
import GreenMark from "@/icons/mapsvgicons/GreenLocator.svg";
import RedMark from "@/icons/mapsvgicons/RedLocator.svg";
import YellowMark from "@/icons/mapsvgicons/YellowLocator.svg";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
  GeoJSON,
} from "react-leaflet";
import geojsonWorldMap from "geojson-world-map";
import L from "leaflet";

function Maps() {
  const data1 = [
    {
      name: "abc",
      lat: 56.56565,
      lng: 34.343434,
      url: "https://www.svgrepo.com/download/38705/location-pin.svg",
    },
    {
      name: "xyz",
      lat: 45.56565,
      lng: 67.343434,
      url: "https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png",
    },
    {
      name: "pqr",
      lat: 23.56565,
      lng: 56.343434,
      url: "https://www.svgrepo.com/show/127575/location-sign.svg",
    },
    {
      name: "mnp",
      lat: 12.56565,
      lng: 48.343434,
      url: "https://freesvg.org/img/map-pin.png",
    },
    {
      name: "qwer",
      lat: 59.56565,
      lng: 65.343434,
      url: "https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png",
    },
  ];
  const [lat, setlat] = useState<number | null>(null);
  const [lng, setlng] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(5);

  function Markers() {
    return data1.map((marker, index) => {
      return (
        <Marker
          eventHandlers={{
            click: () => {
              // map.flyTo([marker.lat, marker.lng], 4);
            },
          }}
          key={index}
          position={{
            lat: marker.lat,
            lng: marker.lng,
          }}
          icon={
            new L.Icon({
              iconUrl: marker.url,
              iconSize: [32, 32],
              iconAnchor: [16, 32],
              popupAnchor: [0, -32],
            })
          }
        >
          <Popup>
            <div className="map-popup">{marker.name}</div>
          </Popup>
        </Marker>
      );
    });
  }

  function MyComponent() {
    const mapEvents = useMapEvents({
      zoomend: () => {
        setlat(null);
        setZoomLevel(mapEvents.getZoom());
      },
    });
    return null;
  }

  const HandleMap = (): null => {
    const map: any = useMap();
    map.flyTo([lat, lng], 4);
    return null;
  };
  const HandleClickmap = (lat: number, lng: number) => {
    setlat(lat);
    setlng(lng);
  };
  return (
    <>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "full",
        }}
      >
        <div style={{ width: "50%" }}>
          <table>
            <tr>
              <th>name</th>
              <th>lat</th>
              <th>lng</th>
            </tr>
            {data1.map((val) => {
              return (
                <>
                  <tr>
                    <td
                      onClick={() => {
                        HandleClickmap(val.lat, val.lng);
                      }}
                    >
                      {" "}
                      {val.name}
                    </td>
                    <td
                      onClick={() => {
                        HandleClickmap(val.lat, val.lng);
                      }}
                    >
                      {val.lat}
                    </td>
                    <td
                      onClick={() => {
                        HandleClickmap(val.lat, val.lng);
                      }}
                    >
                      {" "}
                      {val.lng}
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
        <div className="map-container">
          <MapContainer
            center={[47.217324, 13.097555]}
            style={{ height: "60vh", width: "100%" }}
            zoom={3}
          >
            {zoomLevel <= 5 && (
              <GeoJSON
                data={geojsonWorldMap}
                style={() => ({
                  color: " rgb(101,178,236)",
                  weight: 0.5,
                  fillColor: "rgb(101,178,236)",
                  fillOpacity: 1,
                })}
              />
            )}
            {lat && <HandleMap />}
            <MyComponent />
            {zoomLevel > 5 && (
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            )}
            <Markers />
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default Maps;
