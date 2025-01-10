import { FontType } from "@/constant";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Props = {
  app_font: FontType;
};

const initialState: Props = {
  app_font: "System Default",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setAppFont(state, action: PayloadAction<Props["app_font"]>) {
      state.app_font = action.payload;
    },
  },
});

export const { setAppFont } = settingsSlice.actions;

export default settingsSlice.reducer;
