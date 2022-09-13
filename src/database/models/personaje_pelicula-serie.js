module.exports = function(sequelize, dataTypes){
    let alias = "Personaje_peliculaSerie";

    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        pelicula_id: {
            type: dataTypes.INTEGER,
        },
        personaje_id: {
            type: dataTypes.INTEGER,
        }
    }
        
    let config ={
        tableName: 'personaje_pelicula-serie',
        timestamps: false,
    }
    
    let Personaje_peliculaSerie = sequelize.define(alias, cols, config);

    Personaje_peliculaSerie.associate = function(models){
        Personaje_peliculaSerie.belongsTo(models.PeliculaOSerie, {
            as: 'peliculaOSerie',
            foreignKey: 'pelicula_id'
        });
        Personaje_peliculaSerie.belongsTo(models.Personaje, {
            as: 'personaje',
            foreignKey: 'personaje_id'
        });
    }

    return Personaje_peliculaSerie;
}