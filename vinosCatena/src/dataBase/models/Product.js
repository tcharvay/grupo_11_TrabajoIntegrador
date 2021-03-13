module.exports = function(sequelize, dataTypes) {
    let alias = 'Product'
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
        },
        description: {
            type: dataTypes.STRING(155),
            notNull: true,
                        
        },
        price: {
            type: dataTypes.FLOAT(10,2),
            notNull: true,
                        
        },
        id_img:{
            type:dataTypes.STRING(255),
            notNull:true,
        },
        id_cepa:{
            type:dataTypes.INTEGER,
            notNull:true,
        }
        
    }

       

    let config = {
        tableName: 'product',
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models)=>{ 
        Product.belongsTo (models.Cepa,{foreignKey :"id_cepa", as: "cepas"}),
        Product.belongsTo (models.Image,{foreignKey:"id_img", as: "image"})
    }

    return Product;
}