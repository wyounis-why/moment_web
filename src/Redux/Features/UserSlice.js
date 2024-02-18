import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import localhost from "../../util";

// Authenticate user (you can dispatch this async action from your component)
const url = `${localhost}/users`;
const initialState = {
  requestStatus: "idle",
  verifyStatus: "idle",
  deletionStatus: "",
  deletionMessage: null,
};

export const requestAccountDeletion = createAsyncThunk(
  "user/requestAccountDeletion",
  async (email, { rejectWithValue }) => {
    console.log(email,"email to delte")
    try {
      const response = await axios.post(`${url}/request-deletion`, { email });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);

// Async thunk for verifying account deletion
export const verifyAccountDeletion = createAsyncThunk(
  "user/verifyAccountDeletion",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${url}/verify-deletion/${token}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.msg);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(requestAccountDeletion.pending, (state) => {
        state.deletionStatus = "loading";
      })
      .addCase(requestAccountDeletion.fulfilled, (state, action) => {
        state.deletionStatus = "succeeded";
        state.deletionMessage = action.payload.msg; // Assuming the backend sends a message on success
      })
      .addCase(requestAccountDeletion.rejected, (state, action) => {
        state.deletionStatus = "failed";
        state.error = action.payload; // Storing the error message from the backend
      });
  },
});

export default userSlice.reducer;
