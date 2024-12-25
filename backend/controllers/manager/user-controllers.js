const User = require("../../models/userModel");

const fetchAllCustomers = async (req, res) => {
   try {
      const now = new Date();
      await User.deleteMany({
         isBlocked: { $ne: null },
         isBlocked: { $lte: new Date(now - 7 * 24 * 60 * 60 * 1000) } // 7 days ago
      });

      const customers = await User.find({ role: "customer", isBlocked: null });
      res.status(200).json({ success: true, customers });
   } catch (error) {
      console.error(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during fetchAllCustomers."
      });
   }
};

const fetchAllSalesStaff = async (req, res) => {
   try {
      const now = new Date();
      await User.deleteMany({
         isBlocked: { $ne: null },
         isBlocked: { $lte: new Date(now - 7 * 24 * 60 * 60 * 1000) }
      });

      const salesStaff = await User.find({ role: "sales_staff", isBlocked: null });
      res.status(200).json({ success: true, salesStaff });
   } catch (error) {
      console.error(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during fetchAllSalesStaff."
      });
   }
};

const fetchAllWarehousesStaff = async (req, res) => {
   try {
      const now = new Date();
      await User.deleteMany({
         isBlocked: { $ne: null },
         isBlocked: { $lte: new Date(now - 7 * 24 * 60 * 60 * 1000) }
      });

      const warehouseStaff = await User.find({ role: "warehouse_staff", isBlocked: null });
      res.status(200).json({ success: true, warehouseStaff });
   } catch (error) {
      console.error(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during fetchAllWarehousesStaff."
      });
   }
};

const fetchAllManager = async (req, res) => {
   try {
      const now = new Date();
      await User.deleteMany({
         isBlocked: { $ne: null },
         isBlocked: { $lte: new Date(now - 7 * 24 * 60 * 60 * 1000) }
      });

      const managers = await User.find({ role: "manager", isBlocked: null });
      res.status(200).json({ success: true, managers });
   } catch (error) {
      console.error(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during fetchAllManager."
      });
   }
};

const editInformations = async (req, res) => {
   const { userId, username, phone, password, role, address } = req.body;
   try {
      const updatedUser = await User.findByIdAndUpdate(userId, {
         username,
         phone,
         password,
         role,
         address,
         updatedAt: new Date()
      }, { new: true });

      if (!updatedUser) {
         return res.status(404).json({
            success: false,
            message: "User not found."
         });
      }

      res.status(200).json({ success: true, updatedUser });
   } catch (error) {
      console.error(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during editInformations."
      });
   }
};

const isBlocked = async (req, res) => {
   const { userId } = req.params;
   const { active } = req.body;
   try {
      const user = await User.findById(userId);
      if (!user) {
         return res.status(404).json({
            success: false,
            message: "User not found."
         });
      }

      if (active === "delete") {
         user.isBlocked = new Date();
      } else if (active === "active") {
         user.isBlocked = null;
      } else {
         return res.status(400).json({
            success: false,
            message: "Invalid active status."
         });
      }

      await user.save();
      res.status(200).json({ success: true, user });
   } catch (error) {
      console.error(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during isBlocked."
      });
   }
};

module.exports = {
   fetchAllCustomers,
   fetchAllSalesStaff,
   fetchAllWarehousesStaff,
   fetchAllManager,
   editInformations,
   isBlocked,
};
