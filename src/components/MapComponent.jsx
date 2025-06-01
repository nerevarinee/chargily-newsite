// components/MapComponent.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent() {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={[35.7, 4.55]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[35.704, 4.534]}>
          <Popup>You are in M'Sila!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapComponent;
