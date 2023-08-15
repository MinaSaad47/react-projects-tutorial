import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:5001/users");
  // await pause(2000);
  return response.data;
});

function pause(millisecond) {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
}

export { fetchUsers };
