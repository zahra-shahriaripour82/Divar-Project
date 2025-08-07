import { useQuery } from "@tanstack/react-query";
import api from "../configs/api"

const useGetUserProfile=()=>{
const queryFn=()=>api.get("/user/whoami");
const queryKey=["profile"];
return useQuery({queryFn,queryKey})
}
// const useGetUserProfile = () => {
//   const queryFn = async () => {
//     const res = await api.get("/user/whoami");
//     return res.data; 
//   };

//   const queryKey = ["profile"];
//   return useQuery({ queryFn, queryKey });
// };
export {useGetUserProfile}