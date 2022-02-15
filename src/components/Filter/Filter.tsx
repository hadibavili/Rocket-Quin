import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import Checkbox from "./Checkbox";
import DatePickerCustom from "./DatePicker";
import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import Loader from "components/UI/Loader/Loader";
const RowCustom = styled.div`
   .row {
      position: fixed;
      z-index: 2147483647;
      margin-left: 100px;
   }
`;

const Filter: React.FC = () => {
   const { isLoading, error } = useAppSelector(
      (state: RootState) => state.rockets
   );

   const firstRocketChangeHandler = () => {};

   return (
      <>
         <RowCustom>
            {isLoading && <Loader />}
            {error !== "" && <span>{error}</span>}
            <Row>
               <Col md={4}>
                  <DatePickerCustom label="Start Date" type="start" />
               </Col>
               <Col md={4}>
                  <DatePickerCustom label="End Date" type="end" />
               </Col>

               <Col md={4} className="mt-3">
                  <Checkbox
                     label="First occurring launch"
                     onCheckboxChange={firstRocketChangeHandler}
                  />
               </Col>
            </Row>
         </RowCustom>
      </>
   );
};

export default Filter;
