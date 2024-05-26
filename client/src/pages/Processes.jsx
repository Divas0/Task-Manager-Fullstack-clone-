import React, { useState } from "react";
import HeaderProcesses from "../components/HeaderProcesses";

const Processes = ({ systemdata, isActive }) => {

  
  

  const sortedData = systemdata?.list?.sort(function (a, b) {
    return b - a;
  });
  return (
    <div className={`h-auto  ${isActive ? "ml-[6%]" : "ml-[12%]"}  text-black bg-slate-900  `}>
      <div className="flex justify-between" >
      <h1 className="text-white font-semibold text-2xl "> processes</h1>
      <div>
        <HeaderProcesses />
      </div>
    </div><div className="mt-[20px]">
        <table className="border table-auto p-[10px] text-gray-400 ">
          <tr className="p-[10px] border ">
            <th className="p-[10px] ">name</th>
            <th>status</th>
            <th>cpu</th>
            <th> memory</th>
            <th> disk</th>
            <th> network</th>
          </tr>

          {sortedData?.map((data) => (
            <tr className="">
              <td className="border p-[10px] border-gray-300 "> {data?.name}</td>
              <td className="border p-[10px] border-gary-300"> {data?.state}</td>
              <td className="border p-[10px] border-gray-300 "> {data?.cpu}</td>
              <td className="border p-[10px] border-gray-300 "> {data?.mem}</td>
              <td className="border p-[10px] border-gray-300 "> {data?.disk}</td>
              <td className="border p-[10px] border-gray-300 "> {data?.pid}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Processes;
