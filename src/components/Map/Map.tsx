import { MapContainer, TileLayer } from "react-leaflet";
import styled from "styled-components";
import { LatLngExpression } from "leaflet";
import { CONFIG } from "../../global/config";
import "leaflet/dist/leaflet.css";
import Points from "./Points";

const CustomDiv = styled.div`
   .leaflet-container {
      width: 100%;
      height: 100vh;
   }
`;

const Map: React.FC = () => {
   return (
      <CustomDiv>
         <MapContainer
            center={CONFIG.CENTER as LatLngExpression}
            zoom={CONFIG.ZOOM}
         >
            <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Points />
         </MapContainer>
      </CustomDiv>
   );
};

export default Map;
