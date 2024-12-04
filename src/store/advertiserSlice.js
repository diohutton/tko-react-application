import { createSlice } from "@reduxjs/toolkit";
import ADVERTISERS from "../data/advertisers";

const filtered = ADVERTISERS.filter((ad) => ad.category === "Business");
const initialAdState = {
  filteredAdvertisers: filtered,
  selectedCategory: "Business",
};

const advertiserSlice = createSlice({
  name: "advertisers",
  initialState: initialAdState,
  reducers: {
    filterRestaurants(state, action) {
      const restaurants = ADVERTISERS.filter(
        (ad) => ad.category === "Restaurant"
      );
      state.filteredAdvertisers =
        action.payload === ""
          ? restaurants
          : restaurants.filter((rest) => rest.town === action.payload);
    },
    changeCategory(state, action) {
      state.selectedCategory = action.payload;
      state.filteredAdvertisers = ADVERTISERS.filter(
        (ad) => ad.category === action.payload
      );
    },
  },
});

export const advertiserActions = advertiserSlice.actions;

export default advertiserSlice.reducer;
