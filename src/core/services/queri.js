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

const useGetMyPostList =()=>{
  const queryFn=()=>api.get("/post/my");
  const queryKey=["my-post-list"];
  return useQuery({queryFn,queryKey})
}

const useGetAllPost=()=>{
  const queryFn=()=>api.get("/");
  const queryKey=["AllPost"];
  return useQuery({queryFn,queryKey})
}
export { useGetUserProfile, useGetCategories,useGetMyPostList ,useGetAllPost };
