import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      nombre: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      nombre: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    { 
      //_id: '1',
      nombre: 'Amapolas Rojas',
      slug: 'amapolas-rojas',
      categoria: 'Flores',
      image: '/images/p1.jpg',
      precio: 34,
      stock: 10,
      marca: 'None',
      rating: 3,
      numReviews: 10,
      descripcion: 'planta con unas flores muy características de color rojo intenso y un interior blanco.',
    },
    { 
      //_id: '2',
      nombre: 'Rosas Amarillas',
      slug: 'rosas-amarillas',
      categoria: 'Flores',
      image: '/images/p2.jpg',
      precio: 22,
      stock: 5,
      marca: 'None',
      rating: 3,
      numReviews: 6,
      descripcion: 'planta con unas flores muy características de color amarillo intenso.',
    },
    { 
      //_id: '3',
      nombre: 'Tulipanes',
      slug: 'rosas-variocolor',
      categoria: 'Flores',
      image: '/images/p3.jpg',
      precio: 28,
      stock: 7,
      marca: 'None',
      rating: 3,
      numReviews: 8,
      descripcion: 'planta con unas flores muy características de color amarillo intenso.',
    },
    { 
      //_id: '4',
      nombre: 'Anémona Azul',
      slug: 'anenoma-azul',
      categoria: 'Flores',
      image: '/images/p4.jpg',
      precio: 45,
      stock: 15,
      marca: 'None',
      rating: 3,
      numReviews: 9,
      descripcion: 'planta con unas flores muy características de color amarillo intenso.',
    },

  ]
};

export default data;