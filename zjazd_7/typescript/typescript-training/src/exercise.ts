
// ZADANIE PODSUMOWUJĄCE
// Otypuj obiekt customer. Postaraj się wykorzystać jak najwięcej poznanych
// typów, stwórz własne w razie potrzeby. Pamiętaj, że kod musi się kompilować.

type Currency = 'USD' | 'EUR' | 'PLN';
type Gender = 'male' | 'female';

interface Person {
    firstName: string;
    lastName: string;
}

interface Address { 
    area: { name: string, code: number };
    street: string;
    house: number;
    flat: number | null;
    postalCode: string;
}

interface Order {
    id: number;
    completed: boolean | null;
    paid: boolean;
    amount: { value: number, currency: Currency};
}

interface Customer extends Person {
    friends: Person[];
    address: Address,
    orders: Order[],
    gender: Gender,
    isVip: boolean
}

const customer: Customer = {
  firstName: 'John',
  lastName: 'Doe',
  friends: [
    {
      firstName: 'Tom',
      lastName: 'Gunn',
    },
    {
      firstName: 'Sam',
      lastName: 'Sean',
    }
  ],
  address: {
    area: {
      name: "Greater Boston",
      code: 50123229
    },
    street: "Sun Avenue",
    house: 25,
    flat: null,
    postalCode: '4400192'
  },
  orders: [
    {
      id: 101,
      completed: false,
      paid: false,
      amount: {
        value: 99.99,
        currency: 'USD'
      }
    },
    {
      id: 102,
      completed: null,
      paid: true,
      amount: {
        value: 256.99,
        currency: 'EUR'
      }
    },
    {
      id: 102,
      completed: true,
      paid: true,
      amount: { value: 199.55, currency: 'PLN' }
    }
  ],
  gender: 'male',
  isVip: false
}

const customers: Customer[] = [customer];

