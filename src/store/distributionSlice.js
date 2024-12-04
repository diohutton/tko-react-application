import { createSlice } from "@reduxjs/toolkit";
import DISTRIBUTION from "../data/distribution";

const initialState = { distribution: DISTRIBUTION };

const distributionSlice = createSlice({
  name: "distro",
  initialState,
  reducers: {
    reset(state) {
      state.distribution = [];
    },
  },
});

export default distributionSlice.reducer;
