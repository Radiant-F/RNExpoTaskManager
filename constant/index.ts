export const fonts = [
  { name: "System Default" },
  { name: "Poppins" },
  { name: "Montserrat" },
  { name: "PlaywriteVN" },
  { name: "RubikVinyl" },
] as const;

export type FontType = (typeof fonts)[number]["name"];

import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();
