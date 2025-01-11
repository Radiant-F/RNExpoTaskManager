import { Platform, Text as TextDefault, TextStyle } from "react-native";
import React from "react";
import { useAppSelector } from "@/hooks";
import { fonts } from "@/constant";

type Props = {
  children?: string | string[];
  style?: TextStyle;
};

export default function Text({ children, style }: Props) {
  const { app_font, app_theme } = useAppSelector((state) => state.settings);

  function getAppFont() {
    const checkWeight = (index: number) => {
      if (Platform.OS == "android" && style?.fontStyle == "normal")
        return fonts[index].name + "Italic";
      else if (style?.fontStyle == "italic")
        return fonts[index].name + "Italic";
      else if (Platform.OS == "android" && style?.fontWeight == "normal")
        return fonts[index].name + "Bold";
      else if (style?.fontWeight == "bold") return fonts[index].name + "Bold";
      else if (style?.fontWeight == "thin") return fonts[index].name + "Thin";
      else return fonts[index].name + "Regular";
    };

    switch (app_font) {
      case "Poppins":
        return checkWeight(1);
      case "Montserrat":
        return checkWeight(2);
      case "PlaywriteVN":
        return checkWeight(3);
      case "RubikVinyl":
        return fonts[4].name;
      default:
        return "";
    }
  }

  // when on Android, bold font weight overrides bold font family.
  // here we make the condition if bold font weight is defined,
  // return the font weight to normal so that the bold font family can be used.
  function checkFontWeight(): TextStyle["fontWeight"] {
    if (Platform.OS != "android") return style?.fontWeight;
    else {
      if (app_font == "System Default") return style?.fontWeight;
      else if (style?.fontWeight == "bold") return "normal";
      else return style?.fontWeight;
    }
  }

  // when on Android, italic font style overrides italic font family.
  // here we make the condition if italic font style is defined,
  // return the font style to normal so that the italic font family can be used.
  function checkFontStyle(): TextStyle["fontStyle"] {
    if (Platform.OS != "android") return style?.fontStyle;
    else {
      if (app_font == "System Default") return style?.fontStyle;
      else if (style?.fontStyle == "italic") return "normal";
      else return style?.fontStyle;
    }
  }

  // this breaks the web css rendering for idk what reason.
  const styleFont: TextStyle = {
    fontFamily: getAppFont(),
    fontWeight: checkFontWeight(),
    fontStyle: checkFontStyle(),
    color: style?.color ? style.color : app_theme == "dark" ? "white" : "black",
  };

  return (
    <TextDefault style={{ ...style, ...styleFont }}>{children}</TextDefault>
  );
}
