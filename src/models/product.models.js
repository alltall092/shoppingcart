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
 *           example: alcatel
 *         imgProd:
 *           type: string
 *           example: imagenes.jpg
 *         price:
 *           type:
 *           example: 100
 *         availableQty:
 *           type: integer
 *           example: 10
 *         status:
 *            type:
 *            example: false
 *         userId:
 *           type: integer
 *           example: 1
 * 
 * 
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