import { useState } from "react"
import SendOtp from "../components/templates/authform/SendOtp";
import CheckOtp from "../components/templates/authform/CheckOtp"

function AuthPage() {
    const [step,setStep]=useState(1);
    const [mobile,setMobile]=useState("");
    const [code,setCode]=useState("")
  return (
    <div>
        {step ===1 && <SendOtp mobile={mobile} setMobile={setMobile} setStep={setStep}/>}
            {step ===2 && <CheckOtp/>}
    </div>
  )
}

export default AuthPage