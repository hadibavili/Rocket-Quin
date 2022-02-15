import { Icon } from "leaflet";
import { Marker } from "react-leaflet";
import { useAppSelector } from "app/hooks";
import { CONFIG } from "global/config";
import { RootState } from "app/store";
const myIcon = new Icon({
   iconUrl: CONFIG.ICON_URL,
   iconSize: [40, 40],
});
const Points: React.FC = () => {
   const rockets = useAppSelector((state: RootState) => state.rockets.rockets);
   return (
      <>
         {rockets.map((rocket: Rocket) => (
            <Marker
               key={rocket.id}
               position={[+rocket.pad.latitude, +rocket.pad.longitude]}
               icon={myIcon}
            >
            </Marker>
         ))}
      </>
   );
};

export default Points;
