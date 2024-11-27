import React, { useState } from "react";
import QueryForm from "../QueryForm/QueryForm";

const GeneralInfo = () => {
  const [isOpneQfrom, setIsopenQform] = useState('hidden')
  return (
    <>
      <div className="general-info-query-container flex flex-col justify-between h-[82vh] max-w-[400px]">
        <div className="title-info-cart flex flex-col">
          <p className="font-bold text-4xl font-sans self-end mb-10">
            General Details
          </p>
          <div className="info-card flex flex-col gap-28 p-8 rounded-lg bg-gradient-to-bl from-red-100 to-cyan-50">
            <div className="user-name-batch flex justify-between text-xl">
              <p>username</p>
              <p>cse61A</p>
            </div>
            <div className="identity-no font-bold text-4xl">
              <p>0272230005101073</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setIsopenQform('')
          }}
          type="submit"
          className="bg-[#2E90FA] px-8 py-3 rounded-lg border-b-4 border-b-[#86CAFF] text-white text-xl self-end"
        >
          Ask CR
        </button>
      </div>
      <QueryForm isOpneQfrom = {isOpneQfrom} setIsopenQform = {setIsopenQform}/>
    </>
  );
};

export default GeneralInfo;
