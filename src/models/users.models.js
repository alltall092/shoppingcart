const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

/**
 * @openapi
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *             example: piyoyo279
 *          email:
 *           type: string
 *             example: piyoyo@gmail.com
 *                password:
 *                    type: string
 *                     example: example
 *                          register:
 *                            type: object
 *                              properties:
 *                                    username:
 *                                      type: string
 *                                         example:piyoyo279
 *                                                email:
 *                                                     type: string
 *                                                       example: piyoyo279@gmail.com
 *                                                          password:
 *                                                               type: string
 *                                                                  example: pass1234
 *                                                                    securitySchemes:
 *                                                                         bearerAuth:
 *                                                                            type: http
 *                                                                               scheme: bearer
 *                                                                                  bearerFormat: JWT
 */



const Users = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
   
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 8);
        user.password = hash;
      },
    },
  },{
    timestamps: false
  }

);

module.exports = Users;
