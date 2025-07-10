import { useSendOtp } from "../../../core/services/mutations";


function SendOtp({mobile ,setMobile,setStep}) {
  const {mutate,isPending}=useSendOtp()
  const sumbitHandler=(e)=>{
    e.preventDefault();
mutate({mobile},{onSuccess:(data)=>{
console.log(data);

},onError:(error)=>{
  console.log(error);
  
}})

  }
  return (
    <form onSubmit={sumbitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار،لطفا شماره موبایل خود را وارد کنید. کد تایید به این شماره پیامک خواهد شد
      </span>
      <label htmlFor='input'>شماره موبایل خود را وارد کنید </label>
      <input type='text' placeholder="شماره موبایل" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}></input>
      <button type="submit">ارسال کد تایید</button>
    </form>
  )
}

export default SendOtp