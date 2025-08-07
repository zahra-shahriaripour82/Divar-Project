import toast from "react-hot-toast";
import { useCheckOtp } from "../../../core/services/mutations";
import { setCookie } from "../../../core/utils/cookie";
import { useNavigate } from "react-router-dom";
import { useGetUserProfile } from "../../../core/services/queri";
import styles from "../authform/CheckOtpForm.module.css"




function CheckOtp({ code, setCode, setStep, mobile }) {

  
  const {mutate,isPending}=useCheckOtp()
const navigate=useNavigate();
// const {refetch}=useGetUserProfile()
  const submitHandler=(e)=>{
e.preventDefault();
console.log({code});
if(code.length !== 5) toast.error("لطفا کد معتبر وارد کنید ")
if(isPending) return ;

mutate({code,mobile},{onSuccess:(data)=>{
setCookie(data?.data);
navigate("/")
// refetch()
  console.log(data);
  
},onError:(error)=>{
  toast.error(";")


  console.log(error);
  
}})



  }
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p> کد تایید را وارد کنید. </p>
      <span>کد تایید به شماره {mobile} ارسال شد</span>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type ="submit">ورود</button>
      <button onClick={()=> setStep(1)} className={styles.backButton}>تغییر شماره موبایل </button>
    </form>
  );
}

export default CheckOtp;
