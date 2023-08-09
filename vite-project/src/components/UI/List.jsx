import { useState } from "react";
import rasm from "../../assets/image/image.jpg";
import Buttton from "./Button/Buttton";
// import Buttton from "./Buttton";

const List = ({ state: { image, title, number } }) => {
  return (
    <li className="w-full flex items-center justify-between py-5 gap-5 ">
      <p className="w-7 h-7 bg-red-500 text-center rounded-full">1</p>
      <div className=" bg-slate-300 p-3 rounded-xl">
        <img className="w-[60px] h-[60px] rounded-lg" src={image} alt="image" />
      </div>

      <div className="p-2 grow grid place-content-center bg-slate-500 rounded-xl gap-y-2">
        <p className="text-3xl text-violet-800 italic ">{title}</p>
        <p className="text-3xl text-violet-800 font-normal">{number}</p>
      </div>
      <Buttton />
    </li>
  );
};

export default List;
