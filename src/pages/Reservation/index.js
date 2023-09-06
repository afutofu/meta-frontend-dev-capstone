import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../utils/dummyAPI";
import BookingForm from "./BookingForm";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

const Reservations = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate("/reservation-confirmed");
  };

  return (
    <div className="bookings">
      <div className="bookings-header">
        <h2>Table reservation</h2>
        <p>Choose a date and time to dine in Little Lemon</p>
      </div>

      <div className="container">
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      </div>
    </div>
  );
};

export default Reservations;
