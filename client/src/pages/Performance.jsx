import React, { useState } from "react";
import "../pagestyle/grid.css";

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Performance = ({ data, memoryData, diskUsage, isActive }) => {
  const [isSelected, setSelected] = useState("cpu");
  console.log(data);
  console.log(memoryData);
  console.log(diskUsage)

  return (
    <div className={` w-full h-screen ml-[12%] ${ isActive? "ml-[6%]" :"ml-[12%"} text-white bg-slate-900`}>
      <div className="h-[50px] font-bold  border-b-2 border-b-gray ">
        <h1 className="p-[10px]">performance</h1>
      </div>
      <div className="flex ">
        <div className=" w-[120px] h-screen flex flex-col gap-[2px]">
          <button
            onClick={() => setSelected("cpu")}
            className="flex flex-col py-[20px] px-[30px] bg-slate-700 rounded-sm "
          >
            {" "}
            CPU <span> {data[data.length-1]?.value.toFixed(2)}</span>
          </button>
          <button
            onClick={() => setSelected("memory")}
            className="flex flex-col py-[20px] px-[30px] bg-slate-700 rounded-sm "
          >
            {" "}
            Memory <span> {memoryData[0]?.value.toFixed(2)}</span>
          </button>
          <button
            onClick={() => setSelected("diskC")}
            className="flex flex-col py-[20px] px-[30px] bg-slate-700 rounded-sm "
          >
            {" "}
            Disk C <span> {""}</span>
          </button>
          <button
            onClick={() => setSelected("disk0")}
            className="flex flex-col py-[20px] px-[30px] bg-slate-700 rounded-sm "
          >
            {" "}
            Disk 1 <span> {""}</span>
          </button>
          <button
            onClick={() => setSelected("Wifi")}
            className="flex flex-col py-[20px] px-[30px] bg-slate-700 rounded-sm "
          >
            {" "}
            WiFi <span> {""}</span>
          </button>
          <button
            onClick={() => setSelected("Gpu")}
            className="flex flex-col py-[20px] px-[30px] bg-slate-700 rounded-sm "
          >
            {" "}
            Gpu<span> {""}</span>
          </button>
        </div>

        {/* //cpu */}

        {isSelected === "cpu" && (
          
          <div className="grid-bg w-[800px] h-[500px] scroll-auto flex flex-col">
            <AreaChart width={800} height={500} data={data}>
              <XAxis dataKey="name" />
              <YAxis />

              <Area dataKey="value" fill="skyblue" />
            </AreaChart>
          </div>
          
          
        )}
        

        {/* memory */}
        {isSelected === "memory" && (
          <div className={`grid-bg w-[800px] h-[500px] `}>
            <AreaChart width={800} height={500} data={memoryData}>
              <XAxis />
              <YAxis />

              <Area dataKey="value" fill="#b971d1" />
            </AreaChart>
          </div>
        )}

        {/* disk0 */}
        {isSelected === "diskC" && (
          <div className={`grid-bg w-[800px] h-[500px] `}>
            <LineChart width={800} height={500} data={diskUsage}>
              <XAxis />
              <YAxis />
              <Line />
            </LineChart>
          </div>
        )}

{isSelected === "disk0" && (
          <div className="grid-bg w-[800px] h-[500px]">
            <LineChart width={800} height={500}>
              <XAxis />
              <YAxis />
              <Line  />
            </LineChart>
            <h1> wifi</h1>
          </div>
        )}

        {/* wifi */}
        {isSelected === "wifi" && (
          <div className="grid-bg w-[800px] h-[500px]">
            <LineChart width={800} height={500}>
              <XAxis />
              <YAxis />
              <Line  />
            </LineChart>
            <h1> wifi</h1>
          </div>
        )}

        {/* gpu */}
        {isSelected === "gpu" && (
          <div className="grid-bg w-[800px] h-[500px]">
            <LineChart width={800} height={500}>
              <XAxis />
              <YAxis />
              <Line />
            </LineChart>
          </div>
        )}
      </div>
      <div> 
        Utilisation: {data[data.length-1]?.value.toFixed(2)} 

      </div>
    </div>
  );
};

export default Performance;
