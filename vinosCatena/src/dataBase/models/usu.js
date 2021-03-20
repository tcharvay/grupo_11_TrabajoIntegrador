module.exports = function(sequelize, dataTypes) {
    let alias = 'Usuarios'
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            notNull : true,
            
        },
        nombre: {
            type: dataTypes.STRING(155),
            notNull: true,            
        },
        apellido: {
            type: dataTypes.STRING(150),
            notNull: true,
                        
        },
        email: {
            type: dataTypes.STRING(255),
            notNull: true,            
        },
        pasword: {
            type: dataTypes.STRING(255),
            notNull: true,
                        
        },
        administrador: {
            type: dataTypes.STRING(1),
            default: "0",
        },
        avatar: {
            type:dataTypes.STRING(255),
            notNull:true
        }
            
    }

    let config = {
        tableName: 'usuarios',
        timestamps: true,
        underscored: true,
        //paranoid: true
    }

    
    const Notas = sequelize.define(alias, cols, config);
    
    return Notas;
}