import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
   isLoading: false,
   userList: [],
   error: null,
};

// Async thunks
export const fetchAllCustomers = createAsyncThunk(
   "user_manager/fetchAllCustomers",
   async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("/api/manager/users/customers", {
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
      return response.data.customers;
   }
);

export const fetchAllSalesStaff = createAsyncThunk(
   "user_manager/fetchAllSalesStaff",
   async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("/api/manager/users/sales-staff", {
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
      return response.data.salesStaff;
   }
);

export const fetchAllWarehousesStaff = createAsyncThunk(
   "user_manager/fetchAllWarehousesStaff",
   async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("/api/manager/users/warehouses-staff", {
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
      return response.data.warehouseStaff;
   }
);

export const fetchAllManagers = createAsyncThunk(
   "user_manager/fetchAllManagers",
   async () => {
      const token = localStorage.getItem("token");
      const response = await axios.get("/api/manager/users/managers", {
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
      return response.data.managers;
   }
);

export const editInformations = createAsyncThunk(
   "user_manager/editInformations",
   async (userData) => {
      const token = localStorage.getItem("token");
      const response = await axios.put("/api/manager/users/edit", userData, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
      return response.data.updatedUser;
   }
);

export const isBlocked = createAsyncThunk(
   "user_manager/isBlocked",
   async ({ userId, active }) => {
      const token = localStorage.getItem("token");
      const response = await axios.put(`/api/manager/users/block/${userId}`, { active }, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
      return response.data.user;
   }
);

// Slice
const userManagerSlice = createSlice({
   name: "user_manager",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchAllCustomers.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(fetchAllCustomers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userList = action.payload;
         })
         .addCase(fetchAllCustomers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
         })
         .addCase(fetchAllSalesStaff.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(fetchAllSalesStaff.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userList = action.payload;
         })
         .addCase(fetchAllSalesStaff.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
         })
         .addCase(fetchAllWarehousesStaff.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(fetchAllWarehousesStaff.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userList = action.payload;
         })
         .addCase(fetchAllWarehousesStaff.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
         })
         .addCase(fetchAllManagers.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(fetchAllManagers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userList = action.payload;
         })
         .addCase(fetchAllManagers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
         })
         .addCase(editInformations.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(editInformations.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userList = state.userList.map(user =>
               user._id === action.payload._id ? action.payload : user
            );
         })
         .addCase(editInformations.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
         })
         .addCase(isBlocked.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(isBlocked.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userList = state.userList.map(user =>
               user._id === action.payload._id ? action.payload : user
            );
         })
         .addCase(isBlocked.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
         });
   },
});

export default userManagerSlice.reducer;