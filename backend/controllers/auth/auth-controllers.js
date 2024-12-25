const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");

// register sales staff
const registerSalesStaff = async (req, res) => {
   const { username, phone, password, role, address } = req.body;
   try {
      if (!username || !phone || !password || !role || !address) {
         return res.status(400).json({
            success: false,
            message: "All fields are required.",
         });
      }

      if (role !== "sales_staff") {
         return res.status(400).json({
            succcess: false,
            message: "Invalid role. Role must be 'sales_staff'.",
         })
      }

      const existingUser = await User.findOne({ username });
      if (existingUser) {
         return res.status(400).json({
            success: false,
            message: "Username already exists.",
         });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({
         username,
         phone,
         password: hashedPassword,
         role,
         address,
      })
      await newUser.save();

      res.status(201).json({
         success: true,
         message: "Sales staff registered successfully.",
      });

   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         messages: "Some error occurred during registration."
      })
   }
}

// register warehouse staff
const registerWarehousesStaff = async (req, res) => {
   const { username, phone, password, role, address } = req.body;
   try {
      if (!username || !phone || !password || !role || !address) {
         return res.status(400).json({
            success: false,
            message: "All fields are required.",
         });
      }

      if (!username || !phone || !password || !role || !address) {
         return res.status(400).json({
            success: false,
            message: "All fields are required.",
         });
      }

      if (role !== "warehouse_staff") {
         return res.status(400).json({
            success: false,
            message: "Invalid role. Role must be 'warehouse_staff'.",
         });
      }

      const existingUser = await User.findOne({ username });
      if (existingUser) {
         return res.status(400).json({
            success: false,
            message: "Username already exists.",
         });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({ username, phone, password: hashedPassword, role, address });
      await newUser.save();

      res.status(201).json({
         success: true,
         message: "Warehouse staff registered successfully.",
      });

   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         messages: "Some error occurred during registration."
      })
   }
}

const registerManeger = async (req, res) => {
   const { username, phone, password, role, address } = req.body;
   try {
      if (!username || !phone || !password || !role || !address) {
         return res.status(400).json({
            success: false,
            message: "All fields are required.",
         });
      }

      if (!username || !phone || !password || !role || !address) {
         return res.status(400).json({
            success: false,
            message: "All fields are required.",
         });
      }

      if (role !== "manager") {
         return res.status(400).json({
            success: false,
            message: "Invalid role. Role must be 'manager'.",
         });
      }

      const existingUser = await User.findOne({ username });
      if (existingUser) {
         return res.status(400).json({
            success: false,
            message: "Username already exists.",
         });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, phone, password: hashedPassword, role, address });
      await newUser.save();

      res.status(201).json({
         success: true,
         message: "Manager registered successfully.",
      });

   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         messages: "Some error occurred during registration."
      });
   }
}

// register customers
const registerCustomer = async (req, res) => {
   const { username, phone, role } = req.body;
   try {
      if (!username || !phone || !role) {
         return res.status(400).json({
            success: false,
            message: "All fields are required.",
         });
      }

      if (!username || !phone || !role) {
         return res.status(400).json({
            success: false,
            message: "All fields are required.",
         });
      }

      if (role !== "customer") {
         return res.status(400).json({
            success: false,
            message: "Invalid role. Role must be 'customer'.",
         });
      }

      const existingUser = await User.findOne({ username });
      if (existingUser) {
         return res.status(400).json({
            success: false,
            message: "Username already exists.",
         });
      }

      const newUser = new User({ username, phone, role });
      await newUser.save();

      res.status(201).json({
         success: true,
         message: "Customer registered successfully.",
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         messages: "Some error occurred during registration."
      })
   }
}

const loginUser = async (req, res) => {
   const { username, password } = req.body;
   console.log("Login data: ", req.body);

   try {
      if (!username || !password) {
         return res.status(400).json({
            success: false,
            message: "Username and password are required.",
         });
      }

      const user = await User.findOne({ username });
      if (!user) {
         return res.status(404).json({
            success: false,
            message: "User not found.",
         });
      }

      // Kiểm tra trạng thái isBlocked
      if (user.isBlocked) {
         return res.status(403).json({
            success: false,
            message: "Your account is blocked. Please contact support.",
         });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
         return res.status(401).json({
            success: false,
            message: "Invalid password.",
         });
      }

      const token = jwt.sign(
         {
            id: user._id,
            phone: user.phone || " ",
            address: user.address || " ",
            role: user.role,
         },
         process.env.JWT_SECRET,
         { expiresIn: "1d" }
      );

      res.status(200).json({
         success: true,
         message: "Login successful.",
         token,
         user: {
            id: user._id,
            username: user.username,
            role: user.role,
         },
      });
   } catch (error) {
      console.error(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during login.",
      });
   }
};

// logout user
const logoutUser = (req, res) => {
   res.clearCookie("token").json({
      success: true,
      message: "Logged out successfully!",
   });
};

module.exports = {
   registerSalesStaff,
   registerWarehousesStaff,
   registerCustomer,
   registerManeger,
   loginUser,
   logoutUser
}