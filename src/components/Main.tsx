import { useEffect } from "react";
import { fetchRocketsAsync } from "features/rockets/thunk/rocketThunks";
import { useAppDispatch } from "app/hooks";
import { CONFIG } from "global/config";
import Map from "./Map/Map";
import Filter from "./Filter/Filter";

const Main: React.FC = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(
         fetchRocketsAsync({
            start: CONFIG.START.toISOString(),
            end: CONFIG.END.toISOString(),
            limit: CONFIG.LIMIT,
         })
      );
   }, [dispatch]);
   return (
      <>
         <Filter />
         <Map />
      </>
   );
};

export default Main;
