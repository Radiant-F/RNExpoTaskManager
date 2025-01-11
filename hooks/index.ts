import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export function useCurrentFont() {
  const appFont = useAppSelector((state) => state.settings.app_font);

  return appFont;
}
