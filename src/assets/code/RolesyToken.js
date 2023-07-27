export const rolesDB = `// roles.js

const roles = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  GUEST: 'GUEST',
};

module.exports = roles;
`

export const middlewareRoles = `// middleware.js

const roles = require('./roles');

function checkRole(role) {
  return (req, res, next) => {
    if (req.user.role === role) {
      next();
    } else {
      res.status(403).json({ error: 'Acceso denegado' });
    }
  };
}

module.exports = {
  checkRole,
};
`

export const rutaProtegida = `// routes.js

const express = require('express');
const router = express.Router();
const middleware = require('./middleware');
const roles = require('./roles');

const exampleController = require('../controllers/ExampleController');

router.get('/clientes', [
    middleware.checkRole(roles.ADMIN),
],exampleController.getAllClientes());

module.exports = router;
`

export const generarJWT = `const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = { id: user.id, role: user.role };
  const secretKey = 'miClaveSecreta'; 
  const options = { expiresIn: '1h' };

  return jwt.sign(payload, secretKey, options);
}

module.exports = {
  generateToken,
};
`

export const httpRequest = `const axios = require('axios');

const token = 'Bearer ...'; 

const headers = {
  Authorization: token,
};

axios.get('https://api.miapp.com/clientes', { headers })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error.response.data);
  });
`

export const middlewareToken = `// middleware.js

const jwt = require('jsonwebtoken');
const secretKey = 'miClaveSecreta';

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(token.replace('Bearer ', ''), secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }

    req.user = decoded;
    next();
  });
}

module.exports = {
  verifyToken,
};
`

export const rutaToken = `// routes.js

const express = require('express');
const router = express.Router();
const middleware = require('./middleware');

const exampleService = require('../services/ExampleService');

router.get('/clientes', middleware.verifyToken, async (req, res) => {
  try {
    const listOfClientes = await exampleService.getAllClientes();
    res.send({ status: 'OK', data: listOfClientes });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ 
            status: 'FAILED', 
            data: { error: error?.message || error } 
        });
  }
});

module.exports = router;
`