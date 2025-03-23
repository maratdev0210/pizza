import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
