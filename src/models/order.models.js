const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         totalPrice:
 *           type: integer
 *             example: 1
 *             userId:
 *                     type: integer
 *                      example: 1000
 *                         status:
 *                           type:boolean
 *                             example:false
 *
 *  
 */



const Order = db.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    totalPrice:{type:DataTypes.INTEGER,
        allowNull:false,
    
        },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
   
    },
    status:{type:DataTypes.BOOLEAN,
        allowNull:false,
    
        },
  

  },{
    timestamps: false
  });

  module.exports=Order