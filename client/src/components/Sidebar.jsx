import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Cpu, Activity } from "lucide-react";

const Sidebar = ({isActive, setIsActive}) => {

  // const [isActive, setIsActive] = useState(false);

  const data = [
    { route: "/processes", routeName: "Processes", icon: <Cpu  /> },
    { route: "/performance", routeName: "Performance", icon: <Activity /> },
  ];
 

  return (
    <div className={`h-screen fixed ${isActive && ' w-[6%] ' }  w-[12%] bg-slate-950 text-gray-300`}>
      <div className="flex flex-col">
        <button onClick={() => setIsActive(!isActive)}>
          <Menu className="text-white ml-[10px]" />
        </button>
      </div> 
      <ul className="flex ml-[10px] flex-col mb-[10px] font-semibold">
        {data.map((item, index) => (
          <li key={index} className="mb-2">
            <NavLink
              to={item.route}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-600 py-2   rounded flex items-center"
                  : "py-2  hover:bg-gray-700 rounded flex items-center"
              }
            >
              {isActive ? item.icon : item.routeName}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;