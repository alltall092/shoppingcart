const db = require("../utils/database");
const { DataTypes } = require("sequelize");
/**
 * @openapi
 * components:
 *   schemas:
 *     ProductInOrder:
 *       type: object
 *       properties:
 *         orderId:
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
 *                                     status:
 *                                             type:boolean
 *                                                example:false
 *
 *  
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