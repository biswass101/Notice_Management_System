import React, { useState } from "react";
import selectIcon from '../../assets/images/Select.png'
const Actions = ({selectedActions, setActName, cls, img_src, title}) => {
  const[isSelected, setIsSelected] = useState(false)
  return (
    <div className={`${cls} flex gap-2`}>
      <img onClick={() => {
          setIsSelected(!isSelected)
          !isSelected && title !== 'All' && selectedActions.push(title)
          setActName(selectedActions[selectedActions.length - 1])
          isSelected &&  title !== 'All'&& selectedActions.splice(selectedActions.indexOf(title), 1)
          console.log(selectedActions);
        }} src={isSelected? selectIcon : img_src} alt={img_src}/>
      <p className="">{title}</p>
    </div>
  );
};

export default Actions;
