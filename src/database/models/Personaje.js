module.exports = function(sequelize, dataTypes){
    let alias = "Personaje";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        imagen: {
            type: dataTypes.STRING,
        },
        edad: {
            type: dataTypes.INTEGER,
        },
        peso: {
            type: dataTypes.INTEGER,
        },
        historia: {
            type: dataTypes.STRING,
        },
        nombre: {
            type: dataTypes.STRING,
        }
    }
        
    let config= {
        tableName: 'personajes',
        timestamps: false,
    }

    const Personaje = sequelize.define(alias, cols, config);

    Personaje.associate = function(models){
        Personaje.belongsToMany(models.PeliculaOSerie, {
            as: 'peliculaOSerie',
            through: 'personaje_pelicula-serie',
            foreignKey: 'personaje_id',
            otherKey: 'pelicula_id',
            timestamps: false
        });
    }

    return Personaje;
}