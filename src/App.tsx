import { createContext, useState } from 'react';
import './App.css';
import BookingForm from './components/BookingForm';
import TableList from './components/TableList';
// import { getAvailableTables } from './services/BookingService';
import { TableProps } from './components/Table';

export interface ContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  tableNumber: number | null;
  setTableNumber: React.Dispatch<React.SetStateAction<number | null>>;
  numberOfPeople: number | undefined;
  setNumberOfPeople: React.Dispatch<React.SetStateAction<number | undefined>>;
  startBookingDateTime: string;
  setStartBookingDateTime: React.Dispatch<React.SetStateAction<string>>;
  availableTables: TableProps[];
  setAvailableTables: React.Dispatch<React.SetStateAction<TableProps[]>>;
  next: boolean;
  setNext: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ContextType | null>(null);

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tableNumber, setTableNumber] = useState<number | null>(null);
  const [numberOfPeople, setNumberOfPeople] = useState<number | undefined>(
    undefined!
  );
  const [startBookingDateTime, setStartBookingDateTime] = useState(
    new Date().toISOString()
  );
  const [availableTables, setAvailableTables] = useState<TableProps[]>([]);
  const [next, setNext] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        tableNumber,
        setTableNumber,
        numberOfPeople,
        setNumberOfPeople,
        startBookingDateTime,
        setStartBookingDateTime,
        availableTables,
        setAvailableTables,
        next,
        setNext,
      }}
    >
      {!next ? <BookingForm /> : <TableList />}
    </Context.Provider>
  );
}

export default App;
