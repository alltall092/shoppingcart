const db = require("../utils/database");
const { DataTypes } = require("sequelize");
/**
 * @openapi
 * components:
 *   schemas:
 *     ProductInCart:
 *       type: object
 *       properties:
 *         orderId:
 *           type:
 *           example: 1
 *         productId:
 *           type: 
 *           example: 2
 *         quantity:
 *           type:
 *           example: 10
 *         price:
 *           type:
 *           example: 100
 *         status:
 *            type:
 *            example: false
 */
const ProductInOrder = db.define(
  "ProductInOrder",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
   
    },
    productId:{type:DataTypes.INTEGER,
    allowNull:false,

    },
    quantity:{type:DataTypes.INTEGER,
        allowNull:false,
    
        },
        price:{type:DataTypes.DECIMAL,
            allowNull:false,
        
            },
            status:{type:DataTypes.BOOLEAN,
                allowNull:false,
            
                },

  },{
    timestamps: false
  });

  module.exports=ProductInOrder;