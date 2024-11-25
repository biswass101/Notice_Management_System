import React from "react";

const Actions = ({cls, img_src, title}) => {
  return (
    <div className={`${cls} flex gap-2`}>
      <img src={img_src} alt={img_src} />
      <p className="">{title}</p>
    </div>
  );
};

export default Actions;
