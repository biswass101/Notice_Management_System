import React from "react";
import Fileter from "../../components/Fileter/Fileter";
import LastPosted from "../../components/Last_Posted/LastPosted";
import GeneralInfo from "../../components/General_info/GeneralInfo";

const UserPannel = () => {
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
                Hello!👋 username
              </p>
            </div>
          </div>
          <div className="logout-btn-container ">
            <button
              type="submit"
              className="bg-[#2E90FA] px-8 py-3 rounded-lg border-b-4 border-b-[#86CAFF] text-white text-xl"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="filter-last-posted-gen-details flex gap-1 mx-32 px-5 mt-5">
        <Fileter/>
        <LastPosted/>
        <GeneralInfo/>
      </div>
    </>
  );
};

export default UserPannel;
