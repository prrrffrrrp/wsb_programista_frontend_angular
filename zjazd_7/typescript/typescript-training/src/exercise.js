"use strict";
// ZADANIE PODSUMOWUJĄCE
// Otypuj obiekt customer. Postaraj się wykorzystać jak najwięcej poznanych
// typów, stwórz własne w razie potrzeby. Pamiętaj, że kod musi się kompilować.
const customer = {
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
};
const customers = [customer];
