import React from "react";
import { Button } from "flowbite-react";
const Login = () => {
  return (
    <>
      <div className="blur-bar bg-gradient-to-b from-[#0597FF2C] to-white p-20 -rotate-6 relative -top-20 -left-4">
        <p className="absolute top-5 ml-10 rotate-6 font-bold font-sans text-[#2E90FA] text-3xl mt-5">
          CSE61_A
        </p>
      </div>
      <div className="max-w-[28rem] h-[100vh] my-0 mx-auto flex justify-start mt-5">
        <div className="forom-content w-full mx-3">
          <div className="heading-form-container flex flex-col gap-7">
            <h1 className="form-heading font-sans font-bold text-4xl text-[#101828]">
              Log in to portal 💯
            </h1>
            <form action="">
              <div className="lebel-input-btn-container flex flex-col gap-7">
                <div className="label-input-container">
                  <p className="font-sans font-[400] text-xl text-[#101828] mb-1">Enter your ID</p>
                  <input
                    className="border-2 rounded px-4 py-2 outline-none w-full h-[3.5rem] placeholder:text-xl"
                    type="number"
                    name="student_id"
                    id="student_id"
                    placeholder="0272230005xxxx"
                  />
                </div>
                <div className="submit-btn-container ">
                    <button 
                        type="submit" 
                        className="bg-[#2E90FA] px-8 py-3 rounded-lg border-b-4 border-b-[#86CAFF] text-white text-xl">
                    Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
