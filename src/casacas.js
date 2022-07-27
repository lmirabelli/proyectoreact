const products = [
    {
        id: '1',
        precio: '89',
        catergoria: 'seleccion',
        img: 'https://i.ibb.co/VMCw9hn/Argentina.png',
        stock: 12,
        descripcion: 'Argentina'
    },
    {
        id: '2',
        precio: '60',
        catergoria: 'primeraArgentina',
        img: 'https://i.ibb.co/54ZMM94/boca.png',
        stock: 18,
        descripcion: 'Boca Juniors'
    },
    {
        id: '3',
        precio: '84',
        catergoria: 'serieA',
        img: 'https://i.ibb.co/VM1djVq/fiore.jpg',
        stock: 22,
        descripcion: 'Fiorentina'
    },
    {
        id: '4',
        precio: '75',
        catergoria: 'premier',
        img: 'https://i.ibb.co/ZVXMQwQ/fulham.webp',
        stock: 24,
        descripcion: 'Fulham'
    },
    {
        id: '5',
        precio: '82',
        catergoria: 'bundeliga',
        img: 'https://i.ibb.co/GR3Gvzg/hertha.jpg',
        stock: 22,
        descripcion: 'Hertha Berlin'
    },
    {
        id: '6',
        precio: '71',
        catergoria: 'laliga',
        img: 'https://i.ibb.co/C7HkGqk/mallorca.jpg',
        stock: 34,
        descripcion: 'Mallorca'
    },
    {
        id: '7',
        precio: '58',
        catergoria: 'ligue',
        img: 'https://i.ibb.co/mbxWMGm/nantes.jpg',
        stock: 33,
        descripcion: 'Nantes'
    },
    {
        id: '8',
        precio: '88',
        catergoria: 'premier',
        img: 'https://i.ibb.co/WDYmg9n/newcastle.webp',
        stock: 14,
        descripcion: 'Newcastle'
    },
    {
        id: '9',
        precio: '65',
        catergoria: 'ligue',
        img: 'https://i.ibb.co/xFms0zQ/om.png',
        stock: 38,
        descripcion: 'O. Marseille'
    },
    {
        id: '10',
        precio: '69',
        catergoria: 'bundeliga',
        img: 'https://i.ibb.co/37v9SWy/paderborn.jpg',
        stock: 40,
        descripcion: 'Paderborn'
    },
    {
        id: '11',
        precio: '60',
        catergoria: 'primeraArgentina',
        img: 'https://i.ibb.co/9gFVsX9/river.png',
        stock: 18,
        descripcion: 'River PLate'
    },
    {
        id: '12',
        precio: '80',
        catergoria: 'serieA',
        img: 'https://i.ibb.co/6wg6BDB/roma.jpg',
        stock: 8,
        descripcion: 'Roma'
    },
    {
        id: '13',
        precio: '40',
        catergoria: 'ascenso',
        img: 'https://i.ibb.co/b51rW38/sacachispas.jpg',
        stock: 25,
        descripcion: 'Sacachispas'
    },
    {
        id: '14',
        precio: '42',
        catergoria: 'ascenso',
        img: 'https://i.ibb.co/t8WVCs2/Talleres.jpg',
        stock: 10,
        descripcion: 'Talleres (RE)'
    },
    {
        id: '15',
        precio: '80',
        catergoria: 'seleccion',
        img: 'https://i.ibb.co/XkjM64m/Uraguey.png',
        stock: 18,
        descripcion: 'Uruguay'
    },
    {
        id: '16',
        precio: '75',
        catergoria: 'laliga',
        img: 'https://i.ibb.co/YhfsBKt/villarreal.jpg',
        stock: 32,
        descripcion: 'Villarreal'
    },
    {
        id: '17',
        precio: '50',
        catergoria: 'otros',
        img: 'https://i.ibb.co/yyKgP1C/wellingtonphoenix.jpg',
        stock: 45,
        descripcion: 'W. Phoenix'
    },
    {
        id: '18',
        precio: '45',
        catergoria: 'otros',
        img: 'https://i.ibb.co/pX6Nzzm/zamalek.jpg',
        stock: 40,
        descripcion: 'Zamalek'
    }
]
export const stockCamisetas = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3500)
    })
}