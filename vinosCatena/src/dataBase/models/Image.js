module.exports = function(sequelize, dataTypes) {
    let alias = 'Image'
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            notNull : true,
            
        },
        path: {
            type: dataTypes.STRING(155),
            notNull: true,            
        }
        
    }

       

    let config = {
        tableName: 'image',
        timestamps: false
    }

    const Image = sequelize.define(alias, cols, config);

    Image.associate = (models)=>{ 
        Image.hasMany (models.Product,{foreignKey :"id_img", as: "image"})
    }

    return Image;
}