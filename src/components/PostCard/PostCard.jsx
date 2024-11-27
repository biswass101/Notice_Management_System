import React from "react";
import dateIcon from "../../assets/images/date_icon.png";
import assIcon from "../../assets/images/assignment_icon.png";
import courseIcon from "../../assets/images/course_icon.png";
import bellIcon from "../../assets/images/bell_icon.png";
const PostCard = () => {
  return (
    <div className="post-card border border-slate-200 rounded flex flex-col gap-5 py-4 px-5">
      <div className="date-day flex gap-1 p-1 border rounded border-cyan-500 max-w-[200px]">
        <img src={dateIcon} alt={dateIcon} />
        <h1 className="font-sans text-[#2E90FA] ">21-11-2024, Thrusday</h1>
      </div>
      <div className="car-details">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters,
        </p>
      </div>
      <div className="post-type-course-name flex gap-3">
        <div className="assignment flex gap-1 bg-[#FFEAD5] p-2 max-w-32">
            <img src={assIcon} alt={assIcon} />
            <p>Assignment</p>
        </div> 
        <div className="course-name flex gap-1 border border-black w-[200px] rounded items-center">
            <img className="h-[24px] w-[24px]" src={courseIcon} alt={courseIcon} />
            <p>Electronics Circuite II</p>
        </div>
      </div>
      <div className="submission-date-day flex gap-2 border bg-[#FDB022] border-black rounded max-w-[330px] p-1">
            <img src={bellIcon} alt={bellIcon} />
            <p>Submission Date: 01-12-2024, Sunday</p>
      </div>
    </div>
  );
};

export default PostCard;
