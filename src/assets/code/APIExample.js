export const initialPackaje = `{
    "name": "nodejs-apiexample",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo "Error: no test specified" && exit 1"
    },
    "author": "",
    "license": "ISC"
  }
`

export const newPackaje = `{
    "name": "nodejs-apiexample",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo "Error: no test specified" && exit 1",
      "dev": "nodemon index.js",
      "start": "node index.js"
    },
    "author": "",
    "license": "ISC"
  }
`

export const installLibraries = `npm i express
npm i cors
npm i dotenv
npm i nodemon
`

export const indexFile = `const express = require('express');
const cors = require('cors');

require("dotenv").config();

//Crear el servidor de express
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

// Direccion por Defecto
app.get('/', (req, res) => {
    res.send('Node Js Server Example - Default Route');
});

// Escuchar Peticiones
app.listen(process.env.PORT || 4000, () => {
    console.log('Servidor corriendo en puerto 4000');
});
`

export const startServer = `// Primer Comando - Nodemon (Recomendado)
npm run dev

// Segundo Comando - Basico
npm start
`

export const exampleRoutes = `const express = require("express");
const router = express.Router();

const routeController = require("../controllers/RouteController");

/* Me retorna todos los Clientes */
router.get("/", routeController.getAllClientes);

module.exports = router;
`

export const indexFileRoutes = `const express = require('express');
const cors = require('cors');

require("dotenv").config();

//Crear el servidor de express
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

const exampleRoutes = require('./routes/ExampleRoutes');
app.use('/example', modelRouter);

// Direccion por Defecto
app.get('/', (req, res) => {
    res.send('Node Js Server Example - Default Route');
});

// Escuchar Peticiones
app.listen(process.env.PORT || 4000, () => {
    console.log('Servidor corriendo en puerto 4000');
});
`

export const controllerFile = `const exampleService = require("../services/ExampleService");

const getAllClientes = async (req, res) => {
    try {
        const listOfClientes = await exampleService.getAllClientes();
        res.send({ status: "OK", data: listOfClientes });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getAllClientes,
};
`

export const serviceFile = `const { Clientes } = require('../database/clients');

const getAllClientes = async () => {
    try {
        const listOfClientes = await Clientes.findAll();
        return listOfClientes;
    } catch (error) {
        throw { status: 500, message: error };
    }
};

module.exports = {
    getAllClientes,
};
`
export const configDatabase = `// db.js
const mongoose = require('mongoose');

// URL de conexión a la base de datos
const dbURL = 'mongodb://localhost:27017/mi_basededatos';

// Opciones de configuración de la conexión
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Conectar a la base de datos
mongoose.connect(dbURL, dbOptions)
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch((error) => console.error('Error al conectar a la base de datos:', error));
`

export const modelUserExample = `// models/user.js
const mongoose = require('mongoose');

// Definir el esquema del modelo de usuario
const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  rol: {
    type: String,
    enum: ['admin', 'usuario'],
    default: 'usuario',
  },
});

// Crear el modelo de usuario a partir del esquema
const User = mongoose.model('User', userSchema);

module.exports = User;
`

export const controllerUserExample = `// controllers/userController.js
const User = require('../models/user');

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    res.send({ status: 'OK', data: savedUser });
  } catch (error) {
    res.status(error?.status || 500).send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

module.exports = {
  createUser,
};
`

/* TIPOS DE OBJETOS */

export const StringType = `const userSchema = new mongoose.Schema({
    name: String,
    email: String,
  });
`

export const NumberType = `const productSchema = new mongoose.Schema({
    price: Number,
    quantity: Number,
  });
`

export const DateType = `const eventSchema = new mongoose.Schema({
    date: Date,
    startTime: Date,
  });
`

export const BooleanType = `const taskSchema = new mongoose.Schema({
    completed: Boolean,
  });
`

export const ObjectType = `const employeeSchema = new mongoose.Schema({
    details: Object,
  });
`

export const ArrayType = `const bookSchema = new mongoose.Schema({
    authors: Array,
    tags: [String],
  });
`

export const MixedType = `const dataSchema = new mongoose.Schema({
    information: mongoose.Mixed,
  });
`

export const ObjectIdType = `const commentSchema = new mongoose.Schema({
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
    content: String,
  });
`

export const BufferType = `const fileSchema = new mongoose.Schema({
    data: Buffer,
    contentType: String,
  });
`

export const exampleModelFinal = `const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  availableColors: {
    type: [String], // Array de Strings
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  productDetails: {
    type: Object,
  },
  images: {
    type: [Buffer], // Array de Buffers
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
`