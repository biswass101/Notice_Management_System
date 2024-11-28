import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import { Navigate, useNavigate } from "react-router-dom";
import SpinnerLoad from "../../components/SpinnerLoad/SpinnerLoad";
const Login = ({ setIsLogedIn }) => {
  const [studentId, setStudentId] = useState(null);
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [student_name, setStudentName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const notify = (message) => toast(message);
  console.log(studentId);

  const handleLogin = (event) => {
    event.preventDefault();
    let allOk = false;
    console.log("Loged in");

    if (studentId) {
      console.log(studentId);
      // return;
    }

    setIsLoading(true);

    fetch("http://127.0.0.1:8000/student/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ student_id: studentId }),
    })
      .then((response) => {
        if (response.status === 200) {
          allOk = true;
        } else if (response.status === 400) {
          console.log("Not Ok");
        }

        if (!response.ok) {
          console.log("Response not ok!");
        }
        return response.json();
      })
      .then((data) => {
        if (allOk && data.token) {
          notify(data.message)
          localStorage.setItem("token", data.token);
          localStorage.setItem("student_name", data.student_name);
          localStorage.setItem("student_id", studentId.toString());
          localStorage.setItem("message", data.message);
          setIsLoading(false)
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
        else {
          setIsLoading(false)
          notify(data.student_id[0])
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
  return (
    <>{isLoading ? <SpinnerLoad/> : (<><div className="blur-bar bg-gradient-to-b from-[#0597FF2C] to-white p-20 -rotate-6 relative -top-20 -left-4">
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
          <form onSubmit={(e) => {e.preventDefault()}}>
            <div className="lebel-input-btn-container flex flex-col gap-7">
              <div className="label-input-container">
                <p className="font-sans font-[400] text-xl text-[#101828] mb-1">
                  Enter your ID
                </p>
                <input
                  onChange={(e) => {
                    setStudentId(e.target.value);
                  }}
                  className="border-2 rounded px-4 py-2 outline-none w-full h-[3.5rem] placeholder:text-xl"
                  type="number"
                  placeholder="0272230005xxxx"
                />
              </div>
              <div className="submit-btn-container ">
                <button
                  onClick={(e) => {
                    handleLogin(e);
                  }}
                  type="button"
                  className="bg-[#2E90FA] px-8 py-3 rounded-lg border-b-4 border-b-[#86CAFF] text-white text-xl"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div></>)}
    <ToastContainer/>
    </>
  );
};

export default Login;
