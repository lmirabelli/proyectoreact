const products = [
    {
        id: '1',
        precio: '89',
        categoria: 'seleccion',
        img: 'https://i.ibb.co/VMCw9hn/Argentina.png',
        stock: 0,
        descripcion: 'Argentina',
        marca:'Adidas'
    },
    {
        id: '2',
        precio: '60',
        categoria: 'primeraArgentina',
        img: 'https://i.ibb.co/54ZMM94/boca.png',
        stock: 18,
        descripcion: 'Boca Juniors',
        marca:'Adidas'
    },
    {
        id: '3',
        precio: '84',
        categoria: 'serieA',
        img: 'https://i.ibb.co/VM1djVq/fiore.jpg',
        stock: 22,
        descripcion: 'Fiorentina',
        marca:'Kappa'
    },
    {
        id: '4',
        precio: '75',
        categoria: 'premier',
        img: 'https://i.ibb.co/ZVXMQwQ/fulham.webp',
        stock: 24,
        descripcion: 'Fulham',
        marca:'Adidas'
    },
    {
        id: '5',
        precio: '82',
        categoria: 'bundesliga',
        img: 'https://i.ibb.co/GR3Gvzg/hertha.jpg',
        stock: 22,
        descripcion: 'Hertha Berlin',
        marca:'Nike'
    },
    {
        id: '6',
        precio: '71',
        categoria: 'laliga',
        img: 'https://i.ibb.co/C7HkGqk/mallorca.jpg',
        stock: 34,
        descripcion: 'Mallorca',
        marca:'Nike'
    },
    {
        id: '7',
        precio: '58',
        categoria: 'ligue',
        img: 'https://i.ibb.co/mbxWMGm/nantes.jpg',
        stock: 33,
        descripcion: 'Nantes',
        marca:'Macron'
    },
    {
        id: '8',
        precio: '88',
        categoria: 'premier',
        img: 'https://i.ibb.co/WDYmg9n/newcastle.webp',
        stock: 14,
        descripcion: 'Newcastle',
        marca:'Puma'
    },
    {
        id: '9',
        precio: '65',
        categoria: 'ligue',
        img: 'https://i.ibb.co/xFms0zQ/om.png',
        stock: 38,
        descripcion: 'O. Marseille',
        marca:'Puma'
    },
    {
        id: '10',
        precio: '69',
        categoria: 'bundesliga',
        img: 'https://i.ibb.co/37v9SWy/paderborn.jpg',
        stock: 40,
        descripcion: 'Paderborn',
        marca:'Saller'
    },
    {
        id: '11',
        precio: '60',
        categoria: 'primeraArgentina',
        img: 'https://i.ibb.co/9gFVsX9/river.png',
        stock: 18,
        descripcion: 'River PLate',
        marca:'Adidas'
    },
    {
        id: '12',
        precio: '80',
        categoria: 'serieA',
        img: 'https://i.ibb.co/6wg6BDB/roma.jpg',
        stock: 8,
        descripcion: 'Roma',
        marca:'Nike'
    },
    {
        id: '13',
        precio: '40',
        categoria: 'ascenso',
        img: 'https://i.ibb.co/b51rW38/sacachispas.jpg',
        stock: 25,
        descripcion: 'Sacachispas',
        marca:'Vitter'
    },
    {
        id: '14',
        precio: '42',
        categoria: 'ascenso',
        img: 'https://i.ibb.co/t8WVCs2/Talleres.jpg',
        stock: 10,
        descripcion: 'Talleres (RE)',
        marca:'Mut'
    },
    {
        id: '15',
        precio: '80',
        categoria: 'seleccion',
        img: 'https://i.ibb.co/XkjM64m/Uraguey.png',
        stock: 18,
        descripcion: 'Uruguay',
        marca:'Puma'
    },
    {
        id: '16',
        precio: '75',
        categoria: 'laliga',
        img: 'https://i.ibb.co/YhfsBKt/villarreal.jpg',
        stock: 32,
        descripcion: 'Villarreal',
        marca:'Joma'
    },
    {
        id: '17',
        precio: '50',
        categoria: 'otros',
        img: 'https://i.ibb.co/yyKgP1C/wellingtonphoenix.jpg',
        stock: 45,
        descripcion: 'W. Phoenix',
        marca:'Adidas'
    },
    {
        id: '18',
        precio: '45',
        categoria: 'otros',
        img: 'https://i.ibb.co/pX6Nzzm/zamalek.jpg',
        stock: 40,
        descripcion: 'Zamalek',
        marca:'Macron'
    }
]
export const stockCamisetas = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const filtroCamisetas = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(casaca => casaca.id === id))
        }, 100)
    })
}