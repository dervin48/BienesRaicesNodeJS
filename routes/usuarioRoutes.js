import express from "express";
import { formularioLogin, formularioRegistro, registrar, formularioolvidepassword } from "../controllers/usuarioController.js";


const router = express.Router();

router.get('/login',formularioLogin);

router.get('/registro', formularioRegistro);
router.post('/registro', registrar);


router.get('/olvide', formularioolvidepassword);


//router.get('/nosotros', function (req, res) {
//    res.send('Informacion de Nostros')
//});

export default router