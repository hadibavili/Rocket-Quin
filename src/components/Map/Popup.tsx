import { Popup as LeafletPopup } from "react-leaflet";

interface PopupProps {
   rocket: Rocket;
}

const Popup: React.FC<PopupProps> = ({ rocket }) => {
   return (
      <LeafletPopup>
         <h3>Name: {rocket.name}</h3>
         <h3>Name of lunch: {rocket.pad.name}</h3>
         <h3>Lunch date: {rocket.window_start}</h3>
         <h3>Agencies: {rocket.launch_service_provider.name}</h3>
      </LeafletPopup>
   );
};
export default Popup;
