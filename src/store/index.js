import { configureStore } from "@reduxjs/toolkit";
import distributionReducer from "./distributionSlice";
import advertiserReducer from "./advertiserSlice";

const store = configureStore({
  reducer: { distro: distributionReducer, advertisers: advertiserReducer },
});

export default store;
