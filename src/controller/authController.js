const db = require('../database/models');

const authController = {
    login: (req,res)=>{
        res.json('hola')
    },
    processLogin: (req,res)=>{
        db.Usuario.findOne({
            where: {email: req.body.email}
        }).then(userToLogin => {
            if(userToLogin){
                let passwordOk = req.body.contraseña;
                if(passwordOk == userToLogin.contraseña){
                    req.session.userLogged = userToLogin.dataValues;
                    return res.json('login ok :)')
                }else{
                    return res.json('Credenciales invalidas');
                }
            }else{
                return res.json('Credenciales invalidas');
            }
        })
    },
    register: (req,res)=>{
        res.json('hola')
    },
    processRegister: (req,res)=>{
        db.Usuario.findOne({
            where: {email: req.body.email}
        }).then(userInDb => {
            if(userInDb){
                return res.json('el email ya esta en uso')
            }else{
                db.Usuario.create({
                    email: req.body.email,
                    contraseña: req.body.contraseña,
                }).then( () =>{
                    return res.json('usuario creado')
                });
            }
        });

    },
}

module.exports = authController;