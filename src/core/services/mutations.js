import { useMutation } from "@tanstack/react-query";
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
    const mutationFn = (data)=>api.post("/category",data)
    return useMutation({mutationFn})
}

const useDeleteCategory=()=>{
    const mutationFn=(id)=>api.delete(`/category/${id}`,id)
    return useMutation({mutationFn})
}
export {useSendOtp,useCheckOtp,useCategory,useDeleteCategory}