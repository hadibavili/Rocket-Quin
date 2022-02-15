import { Popup as LeafletPopup } from "react-leaflet";

interface PopupProps {
   rocket: Rocket;
}

const Popup: React.FC<PopupProps> = ({ rocket }) => {
   return (
      <LeafletPopup>
         <h6>Name: {rocket.name}</h6>
         <h6>Name of lunch: {rocket.pad.name}</h6>
         <h6>Lunch date: {rocket.window_start}</h6>
         <h6>Agencies: {rocket.launch_service_provider.name}</h6>
      </LeafletPopup>
   );
};
export default Popup;
