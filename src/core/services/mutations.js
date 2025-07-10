import { useMutation } from "@tanstack/react-query";
import api from "../configs/api"

const useSendOtp=()=>{
    const mutationFn = (data)=>api.post("auth/send-opt",data);

    return useMutation({mutationFn})
}

export {useSendOtp,}