import { FontType } from "@/constant";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Appearance, ColorSchemeName } from "react-native";

type Props = {
  app_font: FontType;
  app_theme: ColorSchemeName;
};

const initialState: Props = {
  app_font: "System Default",
  app_theme: Appearance.getColorScheme(),
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setAppFont(state, action: PayloadAction<Props["app_font"]>) {
      state.app_font = action.payload;
    },
    setAppTheme(state, action: PayloadAction<Props["app_theme"]>) {
      state.app_theme = action.payload;
    },
  },
});

export const { setAppFont, setAppTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
