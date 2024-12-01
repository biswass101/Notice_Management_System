import React, { useState } from "react";
import "./QueryForm.css";

import crossIcon from "../../assets/images/crossWhite.png";

const QueryForm = ({isOpneQfrom, setIsopenQform}) => {
    
  return (
    <div className={`login-popup none ${isOpneQfrom}`}>
      <form className="login-popup-container bg-gradient-to-bl from-cyan-50 to-white">
        <div className="login-popup-inputs">
          <div className="id-filed">
            <p className="text-black">ID</p>
            <input
              className="w-full"
              type="number"
              placeholder="0272230005xxxx"
              required
            />
          </div>
          <div className="name-field">
            <p className="text-black">Name</p>
            <input
              className="w-full"
              type="password"
              placeholder="First Name Last Name"
              required
            />
          </div>
          <div className="email-field">
            <p className="text-black">Email</p>
            <input
              className="w-full"
              type="email"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="query-field">
            <p className="text-black">Write Your Query</p>
            <textarea
              id="query"
              className="query-textarea"
              placeholder="Write Something here..."
            ></textarea>
          </div>
        </div>
        <div className="send-close-btn-container flex gap-5">
          <button className="bg-[#2E90FA] rounded-lg px-8 py-2 text-lg text-white border-b-4 border-[#86CAFF]">
            Send
          </button>

          <button onClick={(e) => {
            e.preventDefault()
            // console.log("clicked");
            setIsopenQform("hidden")
          }} className="close-btn-container flex gap-2 justify-center items-center text-lg rounded-lg px-7 border-b-4 border-[#FECDD6] bg-[#F63D68] text-white">
            <img className="text-white" src={crossIcon} alt="" /> Close{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryForm;
