import { check, validationResult } from 'express-validator'
import Usuario from '../models/Usuario.js'

const formularioLogin= (req,res ) => {
    res.render('auth/login', {
       pagina: 'Iniciar Sesión'
    })
}
const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina: 'Crear Cuenta'

    })
}

const registrar = async (req, res) => {
//validacion
await check('nombre').notEmpty().withMessage('El nombre no puede ir vacio').run(req)
await check('email').isEmail().withMessage('Eso no parece un email').run(req)
await check('password').isLength({min:6}).withMessage('El Password debe ser de al menos de 6 caractere').run(req)
await check('repetir_password').equals('password').withMessage('Los password no son iguales').run(req)


let resultado = validationResult(req)


//Verificar que el resultado este vacio
if(!resultado.isEmpty()){
    //Errores
    return res.render('auth/registro', {
        pagina: 'Crear Cuenta',
        errores: resultado.array()
    })
}

res.json(resultado.array());

const usuario = await Usuario.create(req.body);
res.json(usuario)

}

const formularioolvidepassword = (req, res) => {
    res.render('auth/olvidepassword',{
        pagina: 'Recupera tu acceso a Bienes Raices'
    })
}

export{
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioolvidepassword
}