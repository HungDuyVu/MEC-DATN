import { AiOutlineProduct } from "react-icons/ai";
import { FaChartBar, FaSalesforce } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdCategory } from "react-icons/md";
import { TbPackageExport, TbPackageImport, TbTruckDelivery } from "react-icons/tb";

export const taskMenuManager = [
   {
      name: "ThongKe",
      label: "Thống kê",
      icon: <FaChartBar />,
      to: "/home/manager/statistical"
   },
   {
      name: "QuanLyNguoiDung",
      label: "Quản lý người dùng",
      icon: <FaUsers />,
      to: "/home/manager/user"
   },
   {
      name: "QuanLySanPham",
      label: "Quản lý sản phẩm",
      icon: <AiOutlineProduct />,
      to: "/home/manager/statistical"
   },
   {
      name: "QuanLyDanhMuc",
      label: "Quản lý danh mục",
      icon: <MdCategory />,
      to: "/home/manager/products"
   },
   {
      name: "BanHang",
      label: "Bán hàng",
      icon: <FaSalesforce />,
      to: "/home/manager/sales"
   },
   {
      name: "DanhSachHoaDon",
      label: "Danh sách hoá đơn",
      icon: <LiaFileInvoiceSolid />,
      to: "/home/manager/invoices"
   },
   {
      name: "QuanLyNCC",
      label: "Quản lý NCC",
      icon: <TbTruckDelivery />,
      to: "/home/manager/supplier"
   },
   {
      name: "NhapHang",
      label: "Nhập hàng",
      icon: <TbPackageImport />,
      to: "/home/manager/import"
   },
   {
      name: "XuatHang",
      label: "Xuất hàng",
      icon: <TbPackageExport />,
      to: "/home/manager/export"
   },
]

export const taskMenuSalesStaff = [
   {
      name: "ThongKe",
      label: "Thống kê",
      icon: <FaChartBar />,
      to: "/home/manager/statistical"
   },
   {
      name: "QuanLyKhachHang",
      label: "Quản lý khách hàng",
      icon: <FaUsers />,
      to: "/home/manager/statistical"
   },
   {
      name: "QuanLySanPham",
      label: "Quản lý sản phẩm",
      icon: <AiOutlineProduct />,
      to: "/home/manager/statistical"
   },
   {
      name: "BanHang",
      label: "Bán hàng",
      icon: <FaSalesforce />,
      to: "/home/manager/statistical"
   },
   {
      name: "DanhSachHoaDon",
      label: "Danh sách hoá đơn",
      icon: <LiaFileInvoiceSolid />,
      to: "/home/manager/statistical"
   },
   {
      name: "QuanLyNCC",
      label: "Quản lý NCC",
      icon: <TbTruckDelivery />,
      to: "/home/manager/statistical"
   },
   {
      name: "NhapHang",
      label: "Nhập hàng",
      icon: <TbPackageImport />,
      to: "/home/manager/statistical"
   },
   {
      name: "PhieuChi",
      label: "Phiếu chi",
      icon: <TbPackageExport />,
      to: "/home/manager/statistical"
   },
]

export const taskMenuWarehouseStaff = [
   {
      name: "ThongKe",
      label: "Thống kê",
      icon: <FaChartBar />,
      to: "/home/manager/statistical"
   },
   {
      name: "QuanLyDanhMuc",
      label: "Quản lý danh mục",
      icon: <MdCategory />,
      to: "/home/manager/category"
   },
   {
      name: "DanhSachHoaDon",
      label: "Danh sách hoá đơn",
      icon: <LiaFileInvoiceSolid />,
      to: "/home/manager/statistical"
   },
   {
      name: "QuanLyNCC",
      label: "Quản lý NCC",
      icon: <TbTruckDelivery />,
      to: "/home/manager/statistical"
   },
   {
      name: "NhapHang",
      label: "Nhập hàng",
      icon: <TbPackageImport />,
      to: "/home/manager/statistical"
   },
   {
      name: "XuatHang",
      label: "Xuất hàng",
      icon: <TbPackageExport />,
      to: "/home/manager/statistical"
   },
]