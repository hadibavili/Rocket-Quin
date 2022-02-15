import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { fetchRocketsAsync } from "features/rockets/thunk/rocketThunks";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { RootState } from "app/store";
import { rocketActions } from "features/rockets/slice/rocketSlice";

interface DatePickerTypes {
   label: string;
   type: "start" | "end";
}

const DatePickerCustom: React.FC<DatePickerTypes> = props => {
   const dispatch = useAppDispatch();
   const { currentFilter } = useAppSelector(
      (state: RootState) => state.rockets
   );
   const [filter, setFilter] = useState<Filter>(currentFilter);

   const handleChangeFilter = (date: Date) => {
      let newFilter = {
         [props.type]: date.toISOString(),
      } as Partial<Filter>;
      
      setFilter({ ...currentFilter, ...newFilter });
   };

   useEffect(() => {
      dispatch(rocketActions.changeFilter(filter));
      dispatch(fetchRocketsAsync(filter));
   }, [dispatch, filter]);
   
   return (
      <>
         <label>{props.label}:</label>

         <DatePicker
            selected={new Date(filter[props.type])}
            onChange={date => handleChangeFilter(date as Date)}
         />
      </>
   );
};

export default DatePickerCustom;
