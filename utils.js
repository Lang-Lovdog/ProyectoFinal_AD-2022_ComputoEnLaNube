import jwt from 'jsonwebtoken';
//Funcion para generar un token con JWT
export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      nombre: user.nombre,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};

//Funcion para verificar la autenticacion del usuario al momento de la compra
export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Token Invalido' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'No Hay Token' });
  }
};