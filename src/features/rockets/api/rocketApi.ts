import axios from "axios";
import { CONFIG } from "global/config";
export async function fetchRockets(filter: Filter) {
   const { data } = await axios.get(
      CONFIG.BASE_URL +
         "/launch/?include_suborbital=true&is_crewed=false&offset=10&related=false&" +
         "window_start__gte=" +
         filter.start +
         "&window_end__lte=" +
         filter.end +
         "&limit=" +
         filter.limit
   );

   return data;
}
