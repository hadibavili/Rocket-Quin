import { useState } from "react";

interface CheckboxProps {
   label: string;
   onCheckboxChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = props => {
   const [isChecked, setIsChecked] = useState(false);

   const checkboxOnchangeHandler = () => {
      setIsChecked(!isChecked);
   };
   return (
      <>
         <input
            type="checkbox"
            checked={isChecked ? true : false}
            onChange={checkboxOnchangeHandler}
         />
         <label>{props.label}</label>
      </>
   );
};

export default Checkbox;
