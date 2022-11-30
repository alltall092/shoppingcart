const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const handleError = require("./middlewares/error.middleware");
const initModels = require("./models/initModels");
const { userRoutes, authRoutes,productRoutes} = require("./routes");
require("dotenv").config();
const transporter = require("./utils/mailer");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

initModels();





db.authenticate()
  .then(() => console.log("Autenticac..ión exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));
transporter.verify().then(()=>console.log("estamos listo para enviar correos"));
app.get("/", (req, res) => {
  console.log("Bienvenido al server  ");
  
  res.end();
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", productRoutes);

app.use(handleError);


module.exports = app;
