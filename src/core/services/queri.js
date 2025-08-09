import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

const useGetUserProfile = () => {
  const queryFn = () => api.get("/user/whoami");
  const queryKey = ["profile"];
  return useQuery({ queryFn, queryKey });
};
const useGetCategories = () => {
  const queryFn = () => api.get("/category");
  const queryKey = ["categories"];
  return useQuery({ queryFn, queryKey });
};

export { useGetUserProfile, useGetCategories };
