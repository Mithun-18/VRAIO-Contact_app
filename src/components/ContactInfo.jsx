import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiDetail } from "react-icons/bi";
import { MdEditSquare } from "react-icons/md";

export default function ContactInfo({ name, phone, email, handleToggle }) {
  return (
    <div className="flex  items-center justify-between p-2 w-full">
      <div className="flex  items-center gap-4">
        <span className="w-20 lg:w-48 md:w-40 font-semibold text-sm truncate">
          {name}{" "}
        </span>
        <span className="w-20 lg:w-44 md:w-36 text-sm truncate">{phone}</span>
        <span className="w-32 lg:w-80 md:w-64 text-sm truncate">{email}</span>
      </div>
      <div className="flex gap-4 ">
        <BiDetail size={20} className="text-blue-500 cursor-pointer" />
        <MdEditSquare size={20} className="text-blue-500 cursor-pointer" />
        <AiFillDelete
          size={20}
          className="text-red-500 cursor-pointer"
          onClick={handleToggle}
        />
      </div>
    </div>
  );
}
