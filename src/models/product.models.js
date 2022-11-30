const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const Users=require("./users.models");
/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *             example: "alcatel"
 *               imgProd:
 *                     type: string
 *                        example: imgen.jpg
 *                         price:
 *                           type:decimal
 *                             example:20.00
 *                                availableQty:
 *                                     type:integer
 *                                        example:10
 *                                         status:
 *                                           type:boolean
 *                                              userId: 
 *                                                type:integer
 *                                                example:2
 */



const Product = db.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
   
    },
    imgProd: {
      type: DataTypes.STRING,
      allowNull: false,
   
    },
    
    
    price:{type:DataTypes.DECIMAL,
    allowNull:false,

    },
    availableQty:{type:DataTypes.INTEGER,
    allowNull:false},

    status:{type:DataTypes.BOOLEAN,
    allowNull:false},


    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: 'id'
      }
    }

}

)
module.exports=Product;