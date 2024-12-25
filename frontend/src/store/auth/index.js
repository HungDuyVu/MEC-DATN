import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
   isAuthenticated: false,
   user: JSON.parse(localStorage.getItem("user")) || null,
   token: localStorage.getItem("token") || null,
   loading: false,
   error: null,
};

// Async thunk for login
export const loginUser = createAsyncThunk("auth/loginUser", async (formData) => {
   try {
      const response = await axios.post("http://localhost:8080/api/auth/login", formData);
      return response.data;
   } catch (err) {
      return { error: err.response.data };
   }
});

// Async thunk for logout
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
   try {
      const token = localStorage.getItem("token");
      const response = await axios.post("http://localhost:8080/api/auth/logout", {}, {
         headers: {
            Authorization: `Bearer ${token}`
         }
      });
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return response.data;
   } catch (err) {
      return { error: err.response.data };
   }
});


// Async thunk for registering sales staff
export const registerSalesStaff = createAsyncThunk("auth/registerSalesStaff", async (data) => {
   try {
      const response = await axios.post("http://localhost:8080/api/auth/register-sales_staff", data);
      return response.data;
   } catch (err) {
      return { error: err.response.data };
   }
});

// Async thunk for registering warehouse staff
export const registerWarehouseStaff = createAsyncThunk("auth/registerWarehouseStaff", async (data) => {
   try {
      const response = await axios.post("http://localhost:8080/api/auth/register-warehouse_staff", data);
      return response.data;
   } catch (err) {
      return { error: err.response.data };
   }
});

// Async thunk for registering manager
export const registerManager = createAsyncThunk("auth/registerManager", async (data) => {
   try {
      const response = await axios.post("http://localhost:8080/api/auth/register-manager", data);
      return response.data;
   } catch (err) {
      return { error: err.response.data };
   }
});

// Async thunk for registering customer
export const registerCustomer = createAsyncThunk("auth/registerCustomer", async (data) => {
   try {
      const response = await axios.post("http://localhost:8080/api/auth/register-customer", data);
      return response.data;
   } catch (err) {
      return { error: err.response.data };
   }
});

// Define the auth slice
const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      // Optional: Add reducers if needed for synchronous state updates
   },
   extraReducers: (builder) => {
      // Handle login
      builder
         .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload.error) {
               state.error = action.payload.error.message;
            } else {
               state.isAuthenticated = true;
               state.user = action.payload.user;
               state.token = action.payload.token;
               localStorage.setItem("user", JSON.stringify(action.payload.user));
               localStorage.setItem("token", action.payload.token);
            }
         })
         .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });

      // Handle logout
      builder
         .addCase(logoutUser.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(logoutUser.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload.error) {
               state.error = action.payload.error.message;
            } else {
               state.isAuthenticated = false;
               state.user = null;
               state.token = null;
               localStorage.removeItem("user");
               localStorage.removeItem("token");
            }
         })
         .addCase(logoutUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });

      // Handle register sales staff
      builder
         .addCase(registerSalesStaff.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(registerSalesStaff.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload.error) {
               state.error = action.payload.error.message;
            } else {
               state.user = action.payload.user;
               state.token = action.payload.token;
            }
         })
         .addCase(registerSalesStaff.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });

      // Handle register warehouse staff
      builder
         .addCase(registerWarehouseStaff.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(registerWarehouseStaff.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload.error) {
               state.error = action.payload.error.message;
            } else {
               state.user = action.payload.user;
               state.token = action.payload.token;
            }
         })
         .addCase(registerWarehouseStaff.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });

      // Handle register manager
      builder
         .addCase(registerManager.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(registerManager.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload.error) {
               state.error = action.payload.error.message;
            } else {
               state.user = action.payload.user;
               state.token = action.payload.token;
            }
         })
         .addCase(registerManager.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });

      // Handle register customer
      builder
         .addCase(registerCustomer.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(registerCustomer.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload.error) {
               state.error = action.payload.error.message;
            } else {
               state.user = action.payload.user;
               state.token = action.payload.token;
            }
         })
         .addCase(registerCustomer.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
         });
   }
});

export default authSlice.reducer;