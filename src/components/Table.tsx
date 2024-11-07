import { FC } from 'react';

export interface TableProps {
  tableNumber: number;
  seats: number;
}

const Table: FC<TableProps> = ({ tableNumber, seats }) => {
  return (
    <div className="table">
      <p>Table number: {tableNumber}</p>
      <p>Number of seats: {seats}</p>
    </div>
  );
};

export default Table;
