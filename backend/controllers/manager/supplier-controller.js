const Supplier = require("../../models/supplierModel");

const fetchAllSupplier = async (req, res) => {
   try {
      const now = new Date();

      // Xoá các supplier đã hết hạn (isBlocked không null và thời gian isBlocked > 7 ngày trước)
      await Supplier.deleteMany({
         isBlocked: { $ne: null },
         isBlocked: { $lte: new Date(now - 7 * 24 * 60 * 60 * 1000) },
      });

      // Lấy các supplier không bị chặn (isBlocked = null)
      const suppliers = await Supplier.find({ isBlocked: null });

      res.status(200).json({
         success: true,
         suppliers,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during fetchAllSupplier.",
      });
   }
};

const addSupplier = async (req, res) => {
   const { name, email, phone, address, productId, description } = req.body;

   // Kiểm tra các trường bắt buộc
   if (!email || !phone || !address) {
      return res.status(400).json({
         success: false,
         message: "Email, phone, and address are required.",
      });
   }

   try {
      const newSupplier = new Supplier({
         name,
         contactInfo: { email, phone, address }, // Gộp các trường lại thành contactInfo
         productId,
         address,
         description,
      });
      await newSupplier.save();
      res.status(201).json({
         success: true,
         message: "Supplier added successfully.",
         supplier: newSupplier,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during addSupplier.",
      });
   }
};

const editSupplier = async (req, res) => {
   const { name, email, phone, address, productId, description } = req.body;
   const { id } = req.params;

   // Kiểm tra các trường bắt buộc
   if (!email || !phone || !address) {
      return res.status(400).json({
         success: false,
         message: "Email, phone, and address are required.",
      });
   }

   try {
      const updatedSupplier = await Supplier.findByIdAndUpdate(
         id,
         {
            name,
            contactInfo: { email, phone, address },
            productId,
            address,
            description,
            updatedAt: new Date()
         },
         { new: true }
      );
      if (!updatedSupplier) {
         return res.status(404).json({
            success: false,
            message: "Supplier not found.",
         });
      }
      res.status(200).json({
         success: true,
         message: "Supplier updated successfully.",
         supplier: updatedSupplier,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during editSupplier.",
      });
   }
};
const isBlockedSupplier = async (req, res) => {
   const { id } = req.params;
   const { active } = req.body;
   try {
      const supplier = await Supplier.findById(id);
      if (!supplier) {
         return res.status(404).json({
            success: false,
            message: "Supplier not found.",
         });
      }

      if (active === "block") {
         supplier.isBlocked = new Date();
      } else if (active === "unblock") {
         supplier.isBlocked = null;
      } else {
         return res.status(400).json({
            success: false,
            message: "Invalid active status.",
         });
      }

      await supplier.save();
      res.status(200).json({
         success: true,
         message: `Supplier successfully ${active === "block" ? "blocked" : "unblocked"}.`,
         supplier,
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: "Some error occurred during isBlockedSupplier.",
      });
   }
};

module.exports = {
   fetchAllSupplier,
   addSupplier,
   editSupplier,
   isBlockedSupplier,
};