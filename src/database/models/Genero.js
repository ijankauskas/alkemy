module.exports = function(sequelize, dataTypes){
    let alias = "Genero";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
        },
        imagen: {
            type: dataTypes.STRING,
        }
    }
        
    let config= {
        tableName: 'generos',
        timestamps: false,
    }

    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models){
        Genero.hasMany(models.PeliculaOSerie, {
            as: 'peliculaOSerie',
            foreignKey: 'genero_id'
        });
    }

    return Genero;
}