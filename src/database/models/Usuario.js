module.exports = function(sequelize, dataTypes){
    let alias = "Usuario";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: dataTypes.STRING,
        },
        contraseña: {
            type: dataTypes.STRING,
        }
    }
        
    let config= {
        tableName: 'usuarios',
        timestamps: false,
    }

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}