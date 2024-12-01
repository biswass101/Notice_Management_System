import React, { useEffect, useState } from "react";
import Fileter from "../../components/Fileter/Fileter";
import LastPosted from "../../components/Last_Posted/LastPosted";
import GeneralInfo from "../../components/General_info/GeneralInfo";
import { data, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const UserPannel = ({isLogedIn, setIsLogedIn}) => {
  const navigate = useNavigate();
  const [allPost, setAllPost] = useState(null)
  const [queryParams, setQueryParams] = useState([])
  console.log(queryParams);
  // console.log(allPost);
    useEffect(() => {
      let url = "http://127.0.0.1:8000/all/notices/"
      let quParam = ''
      if(queryParams.length == 0)
      {
        ""
      }
      else {
        for(let i = 0; i < queryParams.length; i++) {
            if(i == 0) {
              quParam += `?notice_type=${queryParams[i]}`
            } else {
              quParam += `&notice_type=${queryParams[i]}`
            }
        }

      }

      let finalQuery = url + quParam

      // console.log(finalQuery);

      fetch(finalQuery, {
        method: "GET",
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
          // console.log(response.status);
            if (response.status === 200) {
                response.json().then((data) => setAllPost(data))
            }
        })
        .catch((error) => {
            console.error("Error during logout:", error.message);
            toast.error("An error occurred. Please try again.");
        });
    }, [queryParams])
    const handleLogout = () => {
        const token = localStorage.getItem("token");

        if (!token) {
            toast.error("No token found, user is not logged in.");
            return;
        }

        fetch("http://127.0.0.1:8000/student/logout/", {
            method: "POST",
            headers: {
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
              // console.log(response.status);
                if (response.status === 200) {
                    toast.success("Logout successful!");
                    localStorage.removeItem("token");
                    localStorage.removeItem("student_name");
                    localStorage.removeItem("student_id");
                    localStorage.removeItem("message");
                    setTimeout(() => {
                      navigate("/login");
                    }, 2000);
                } else {
                    toast.error(`Logout failed`);
                }
            })
            .catch((error) => {
                console.error("Error during logout:", error.message);
                toast.error("An error occurred. Please try again.");
            });
    };
  return (
    <>
      <div className="batch-user-logout-container  bg-gradient-to-b from-[#0597FF2C] to-white ">
        <div className="batch-user-logout-content mx-32 flex justify-between items-center">
          <div className="blur-bar  py-8 px-5">
            <div className="batch-name-user-name flex gap-36">
              <p className="font-bold font-sans text-[#2E90FA] text-3xl ">
                CSE61_A
              </p>
              <p className="font-bold font-sans text-[#475467] text-3xl">
                {`Hello!👋 ${localStorage.getItem('student_name') ? localStorage.getItem('student_name') : 'username'}`}
              </p>
            </div>
          </div>
          <div className="logout-btn-container ">
            <button
              onClick={() => {
                  handleLogout()
              }}
              type="submit"
              className="bg-[#2E90FA] px-8 py-3 rounded-lg border-b-4 border-b-[#86CAFF] text-white text-xl"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="filter-last-posted-gen-details flex justify-between gap-20 mx-auto px-5 mt-5 max-w-[1400px]">
        <Fileter setQueryParams={setQueryParams}/>
        <LastPosted allPost={allPost}/>
        <GeneralInfo/>
      </div>
      <ToastContainer/>
    </>
  );
};

export default UserPannel;
