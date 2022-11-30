const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     ProductInCart:
 *       type: object
 *       properties:
 *         cartId:
 *           type: integer
 *             example: 1
 *                productId:
 *                     type: integer
 *                      example: 1
 *                        quantity:
 *                          type:integer
 *                              example:1
 *                                price:
 *                                 type:decimal
 *                                    example:10.00
 *                         status:
 *                           type:boolean
 *                             example:false
 *
 *  
 */
const ProductInCart = db.define(
  "ProductInCart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    cartId: {
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

  module.exports=ProductInCart