import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../configs/api";


const useSendOtp=()=>{
    const mutationFn = (data)=>api.post("auth/send-otp",data);

    return useMutation({mutationFn})
}
const useCheckOtp=()=>{
    const mutationFn = (data)=>api.post("auth/check-otp",data);

    return useMutation({mutationFn})
}


const useCategory=()=>{
const queryClient = useQueryClient();
    const mutationFn = (data)=>api.post("/category",data)
    const onSuccess=()=> queryClient.invalidateQueries({queryKey: ["categories"]})

    
      
 
    return useMutation({mutationFn,onSuccess})
}

const useDeleteCategory=()=>{
    const queryClient = useQueryClient();
    const mutationFn=(id)=>api.delete(`/category/${id}`,id)
    const onSuccess=()=> queryClient.invalidateQueries({queryKey: ["categories"]})
    return useMutation({mutationFn,onSuccess})
}
export {useSendOtp,useCheckOtp,useCategory,useDeleteCategory}