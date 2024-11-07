import axios from 'axios';

const API_URL = 'http://localhost:5211/api';

export const createBooking = (booking: unknown) => {
  return axios.post(`${API_URL}/bookings`, booking);
};

export const getAvailableTables = (
  startBookingDateTime: unknown,
  numberOfPeople: unknown
) => {
  return axios.post(`${API_URL}/tables/available`, {
    numberOfPeople,
    startBookingDateTime,
  });
};
