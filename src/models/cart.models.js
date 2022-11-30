const db = require("../utils/database");
const { DataTypes } = require("sequelize");
/**
 * @openapi
 * components:
 *   schemas:
 *     Cart:
 *       type: object
 *       properties:
 *         userId:
 *           type: integer
 *           example: 1
 *         totalPrice:
 *           type: integer
 *           example: 100
 */




const Cart = db.define(
  "cart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
   
    },
    totalPrice:{type:DataTypes.INTEGER,
    allowNull:false,

    }

  },{
    timestamps: false
  });

  module.exports=Cart