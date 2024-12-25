const express = require('express');
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectMongoDB = require('./configs/mongodb');
const authRouter = require("./routes/auth/auth-routes.js");
const userManager = require("./routes/manager/user-routes.js");
const categoryManager = require("./routes/manager/category-routes.js");
const supplierManager = require("./routes/manager/supplier-routes.js")

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware configuration
app.use(
   cors({
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
      allowedHeaders: [
         "Content-Type",
         "Authorization",
         "Cache-Control",
         "Expires",
         "Pragma",
      ],
      credentials: true,
   })
);

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Connect to MongoDB
connectMongoDB();

// Route configuration
app.use("/api/auth", authRouter);

// manager is router
app.use("/api/manager/users", userManager);
app.use("/api/manager/category", categoryManager);
app.use("/api/manager/supplier", supplierManager);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
