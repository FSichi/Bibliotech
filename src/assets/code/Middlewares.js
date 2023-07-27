export const obligatoriosCode = `const { body, validationResult } = require('express-validator');

app.post('/registro', [
    body('nombre').notEmpty()
                  .withMessage('El campo nombre es obligatorio'),
    body('email').notEmpty()
                 .withMessage('El campo email es obligatorio')
                 .isEmail()
                 .withMessage('El email no tiene un formato válido'),
    body('contrasena').notEmpty()
        .withMessage('El campo contraseña es obligatorio')
], (req, res) => {
    // Lógica de registro de usuario
});
`

export const especificosCode = `const { body, validationResult } = require('express-validator');

app.post('/contacto', [
    body('telefono')
        .notEmpty()
        .withMessage('El campo teléfono es obligatorio')
        .isMobilePhone()
        .withMessage('El teléfono no tiene un formato válido'),
], (req, res) => {
    // Lógica de contacto
});
`

export const customValidationCode = `const { body, validationResult } = require('express-validator');

app.post('/comentario', [
    body('contenido').custom((value) => {
        if (!value.includes('spam')) {
            return true;
        }
        throw new Error('El contenido contiene palabras prohibidas');
    }),
], (req, res) => {
    // Lógica de guardar el comentario
});
`

export const erroresCode = `const { body, validationResult } = require('express-validator');

app.post('/registro', [
    // Reglas de validación
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Lógica de registro de usuario si no hay errores
});
`

export const middlewarePerCode = `const { body, validationResult } = require('express-validator');

const validarUsuario = (req, res, next) => {
    // Lógica de validación del usuario
    next();
};

app.post('/registro', [
    body('nombre')
        .notEmpty()
        .withMessage('El campo nombre es obligatorio'),
    body('email')
        .notEmpty()
        .withMessage('El campo email es obligatorio')
        .isEmail()
        .withMessage('El email no tiene un formato válido'),
    body('contrasena')
        .notEmpty()
        .withMessage('El campo contraseña es obligatorio'),
    validarUsuario, // Middleware personalizado
], (req, res) => {
    // Lógica de registro de usuario
});
`