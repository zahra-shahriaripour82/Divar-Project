import { useState } from "react";

import CheckOtp from "../components/templates/authform/CheckOtp";
import SendOtp from "../components/templates/authform/SendOtp";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  console.log(step);
  
  return (
    <div>
      {step === 1 && (
        <SendOtp mobile={mobile} setMobile={setMobile} setStep={setStep} />
      )}
      {step === 2 && (
        <CheckOtp
          code={code}
          setCode={setCode}
          mobile={mobile}
          setStep={setStep}
        />
      )}
  
    </div>
  );
}

export default AuthPage;
