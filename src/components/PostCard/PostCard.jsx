import React, { useState } from "react";
import dateIcon from "../../assets/images/date_icon.png";
import assIcon from "../../assets/images/assignment_icon.png";
import courseIcon from "../../assets/images/course_icon.png";
import bellIcon from "../../assets/images/bell_icon.png";
import linkIcon from "../../assets/images/LinkIcon.png";
const PostCard = ({ ct }) => {
  // console.log("here");
  // console.log(ct);

  const [descLength, setDescLength] = useState(100)
  const handleReadMore = () => {
    setDescLength(ct?.description.length)
  }
  return (
    <div className="post-card border border-slate-200 rounded flex flex-col gap-5 max-w-[40rem] py-4 px-5">
      <div className="date-day flex gap-1 p-1 border rounded border-cyan-500 max-w-[200px]">
        <img src={dateIcon} alt={dateIcon} />
        <h1 className="font-sans text-[#2E90FA] ">
          {new Date(ct?.created_at).toDateString()}
        </h1>
      </div>
      <div className="car-details">
        {ct?.notice_type === "classroom_code" ? (
          <p className="font-bold text-5xl text-black">{ct?.description}</p>
        ) : (
          <div className="">
            {ct?.description.length > descLength
              ? <>{ct.description.substring(0, descLength) + '...'}
                  <p onClick={handleReadMore} className="text-[#0597FF] cursor-pointer">Read More...</p>
                </>// If the description is longer than 25 characters, truncate and add ellipsis
              : <p onClick={() => {
                !window.getSelection().toString() > 0 && setDescLength(100)
              }}>{ct.description}</p>}
          </div>
        )}
      </div>

      {ct?.resource_link ? (
        ct?.notice_type == "classroom_code" ? (
          <button className="self-start text-xl text-white font-sans rounded bg-[#2E90FA] p-2">
            Join Classroom
          </button>
        ) : (
          <div className="attched-file-link flex gap-1 items-center justify-start max-w-72 p-1 text-[#2E90FA]">
            <img className="h-[24px] w-[24px]" src={linkIcon} alt={linkIcon} />
            <p>{`View attached files`}</p>
          </div>
        )
      ) : null}
      <div className="post-type-course-name flex gap-3">
        <div
          className={`assignment flex gap-3 ${
            ct?.notice_type == "classroom_code"
              ? "bg-[#EFF8FF]"
              : "bg-[#FFEAD5]"
          }  p-2 items-center rounded justify-center`}
        >
          {ct?.notice_type == "classroom_code" ? (
            <img src={linkIcon} />
          ) : (
            <img src={assIcon} alt={assIcon} />
          )}
          <p>
            {ct?.notice_type
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </p>
        </div>
        <div className="course-name flex gap-1 border border-black p-1 rounded items-center">
          <img
            className=""
            src={courseIcon}
            alt={courseIcon}
          />
          <p>{ct?.course_name}</p>
        </div>
      </div>

      {ct?.date ? (
        <div className="submission-date-day flex gap-2 items-center border bg-[#FDB022] border-black rounded p-1 w-[90%]">
          <img src={bellIcon} alt="Bell Icon" />
          <p>
            {ct?.notice_type === "exam" || ct?.notice_type === "class_test"
              ? "Exam"
              : "Submission"}{" "}
            Date: {new Date(ct?.date).toLocaleString()}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default PostCard;
