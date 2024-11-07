import { FC, useContext } from 'react';
import { Context } from '../App';
import Table, { TableProps } from './Table';
import { createBooking } from '../services/BookingService';

const TableList: FC = () => {
  const {
    availableTables,
    next,
    setNext,
    name,
    email,
    numberOfPeople,
    startBookingDateTime,
  } = useContext(Context)!;

  const handleBack = () => {
    setNext(!next);
  };

  const handleClik = (table: TableProps) => () => {
    createBooking({
      customerName: name,
      customerEmail: email,
      tableNumber: table.tableNumber,
      startBookingDateTime: startBookingDateTime,
      numberOfPeople: numberOfPeople,
    })
      .then((response) => {
        console.log(response.data);
        alert('Booking successful');
        handleBack();
      })
      .catch((error) => {
        console.error(error);
        alert(error.response.data);
      });
  };

  return (
    <div className="table-list">
      <h1>Choose a table from the available tables</h1>
      {availableTables.length ? (
        availableTables.map((table: TableProps) => (
          <div onClick={handleClik(table)} key={table.tableNumber}>
            <Table tableNumber={table.tableNumber} seats={table.seats} />
          </div>
        ))
      ) : (
        <p>No available tables at this time :(</p>
      )}
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default TableList;
