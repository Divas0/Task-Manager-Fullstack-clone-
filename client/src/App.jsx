import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Processes from "./pages/Processes";
import Performance from "./pages/Performance";
import Sidebar from "./components/Sidebar";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const App = () => {
  const [isActive, setIsActive]=useState(false)
  const [data, setData] = useState([]);
  const [systemdata, setSystemdata] = useState([]);
  const [memoryData, setMemoryData]=useState([]);
  const [diskUsage, setDiskUsage]=useState([]);
  const [network, setNetwork]=useState("")

  useEffect(() => {
    socket.on("cpu", (cpuPercent) => {
      setData((currentData) => [...currentData, cpuPercent]);
    });

    socket.on("system", (systemData) => {
      setSystemdata(systemData);
      
    });
    socket.on("memory", (memData)=>{
      console.log(memData)
      // setMemoryData(memData.value)
      setMemoryData((currentData)=> [...currentData, memData])
      
    })

    socket.on("diskusage", (diskdata)=>{
      console.log(diskdata)
      // setDiskUsage((currentData)=> [...currentData, diskdata.used])
    })

    socket.on("network", (data)=>{
      console.log(data)
      setNetwork(data)
    })
   

    
    return () => {
      socket.off("cpu");
      socket.off("system");
      socket.off('network');
      socket.off('diskusage');
      socket.off('memory');
    };
  }, []);

  return (
    <>
      <Sidebar  isActive={isActive} setIsActive={setIsActive}/>
      <Routes>
        <Route index path="/processes" element={<Processes systemdata={systemdata} isActive={isActive} />} />
        <Route path="/performance" element={<Performance data={data} memoryData={memoryData} diskUsage={diskUsage}  isActive={isActive}/>}>
          
        </Route>
      </Routes>
    </>
  );
};

export default App;
