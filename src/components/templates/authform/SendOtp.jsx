import { useState } from "react";
import { useSendOtp } from "../../../core/services/mutations";
import { isValidMobile } from "../../../core/utils/validation";
import toast from "react-hot-toast";

function SendOtp({ mobile, setMobile, setStep }) {
  
  const [error, setError] = useState("");
  const { mutate, isPending } = useSendOtp();
  const sumbitHandler = (e) => {
    e.preventDefault();
    if (isPending) return;
    if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید !");

    setError("");
    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success("کد با موفقیت ارسال شد ");
          setStep(2);
          toast.success(data?.data?.code)
          console.log(data);
        },
        onError: (error) => {
          toast.error("لطفا دوباره امتحان کنید !");
          console.log(error);
        },
      }
    );
  };
  return (
    <form onSubmit={sumbitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار،لطفا شماره موبایل خود را وارد کنید. کد
        تایید به این شماره پیامک خواهد شد
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید </label>
      <input
        type="text"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      ></input>
      {!!error && <p>{error}</p>}
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtp;
