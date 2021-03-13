module.exports = function(sequelize, dataTypes) {
    let alias = 'Cepa'
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            notNull : true,
            
        },
        name: {
            type: dataTypes.STRING(155),
            notNull: true,            
        }
        
    }
    let config = {
        tableName: 'cepa',
        timestamps: false,
        underscored: true,
    }

    const Cepa = sequelize.define(alias, cols, config);

    Cepa.associate = (models)=>{ 
        Cepa.hasMany(models.Product,{ foreignKey :"id_cepa", as: "productos"})
    }
    return Cepa;
}    