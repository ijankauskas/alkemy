module.exports = function(sequelize, dataTypes){
    let alias = "PeliculaOSerie";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        imagen: {
            type: dataTypes.STRING,
        },
        genero_id: {
            type: dataTypes.INTEGER,
        },
        titulo: {
            type: dataTypes.STRING,
        },
        fecha: {
            type: dataTypes.INTEGER,
        }
    }
        
    let config= {
        tableName: 'peliculas-series',
        timestamps: false,
    }

    const PeliculaOSerie = sequelize.define(alias, cols, config);

    PeliculaOSerie.associate = function(models){
        PeliculaOSerie.belongsTo(models.Genero, {
            as: 'genero',
            foreignKey: "genero_id"
        });
        PeliculaOSerie.belongsToMany(models.Personaje, {
            as: 'personaje',
            through: 'personaje_pelicula-serie',
            foreignKey: 'pelicula_id',
            otherKey: 'personaje_id',
            timestamps: false
        });
    }

    return PeliculaOSerie;
}