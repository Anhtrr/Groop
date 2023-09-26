const events = [
    {
        id: '1',
        name: 'golf',
        type: 'sport',
        location: {
            address: 'Golf Course',
            online: true,
            link: "www.abc.com",
            longitude: 0.0,
            latitude: 0.0,
        },
    },
    {
        id: '2',
        name: 'basketball',
        type: 'sport',
        location: {
            address: 'WSP',
            online: true,
            link: "www.abcd.com",
            longitude: 0.0,
            latitude: 0.0,
        },
    },
    {
        id: '3',
        name: 'soccer',
        type: 'sport',
        location: {
            address: 'CP',
            online: false,
            link: "www.abcde.com",
            longitude: 123.456,
            latitude: 123.456,
        },
    },
];

// Clients
const users = [
    {
        id: '11',
        name: {
        first: 'Tony',
        last: 'Stark'
        },
        email: 'ironman@gmail.com',
        phone: '343-567-4333',
    },
];

// Clients
const payments = [
    {
        id: '111',
        title: 'venmo',
        desc: 'lorem ipsum',
        totalAmount: 452.2,
        currency: 'usd'
    },
    {
        id: '112',
        title: 'zelle',
        desc: 'lorem ipsum',
        totalAmount: 12.4,
        currency: 'vnd'
    },
    {
        id: '113',
        title: 'cashapp',
        desc: 'lorem ipsum',
        totalAmount: 92.7,
        currency: 'cad'
    },
];

module.exports = { events, users, payments };