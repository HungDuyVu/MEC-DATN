import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import Layout from "../pages/Layout";
import ManagerSatics from "../components/function/manager/ManagerSatics";
import ManagerProduct from "../components/function/manager/ManagerProduct";
import ManagerInvoiceList from "../components/function/manager/ManagerInvoiceList";
import ManagerSales from "../components/function/manager/ManagerSales";
import ManagerSupplier from "../components/function/manager/ManagerSupplier";
import ManagerImport from "../components/function/manager/ManagerImport";
import ManagerExport from "../components/function/manager/ManagerExport";
import ManagerUse from "../components/function/manager/ManagerUse";
import ManagerCategory from "../components/function/manager/ManagerCategory";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Login />
         },
         {
            path: "/home",
            element: <Layout />,
            children: [
               // manager
               {
                  path: "manager/statistical",
                  element: <ManagerSatics />
               },
               {
                  path: "manager/user",
                  element: <ManagerUse />
               },
               {
                  path: "manager/products",
                  element: <ManagerProduct />
               },
               {
                  path: "manager/category",
                  element: <ManagerCategory />
               },
               {
                  path: "manager/sales",
                  element: <ManagerSales />
               },
               {
                  path: "manager/invoices",
                  element: <ManagerInvoiceList />
               },
               {
                  path: "manager/supplier",
                  element: <ManagerSupplier />
               },
               {
                  path: "manager/import",
                  element: <ManagerImport />
               },
               {
                  path: "manager/export",
                  element: <ManagerExport />
               },
            ]
         }
      ]
   }
])

export default router;