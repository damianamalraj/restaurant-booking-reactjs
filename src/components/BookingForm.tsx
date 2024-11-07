import React, { FC, useContext } from 'react';
import { Context } from '../App';
import { getAvailableTables } from '../services/BookingService';

const BookingForm: FC = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    numberOfPeople,
    setNumberOfPeople,
    startBookingDateTime,
    setStartBookingDateTime,
    next,
    setNext,
    setAvailableTables,
  } = useContext(Context)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setNext(!next);

    getAvailableTables(startBookingDateTime, numberOfPeople)
      .then((response) => {
        setAvailableTables(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h1>Booking</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Number of people:</label>
          <input
            type="number"
            placeholder="Number of people"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(Number(e.target.value))}
            required
          />
        </div>

        <div>
          <label>Start booking date and time:</label>
          <input
            type="datetime-local"
            value={new Date(startBookingDateTime).toISOString().slice(0, 16)}
            onChange={(e) =>
              setStartBookingDateTime(new Date(e.target.value).toISOString())
            }
            required
          />
        </div>

        <br />
        <button type="submit">Book</button>
      </form>
    </>
  );
};

export default BookingForm;
