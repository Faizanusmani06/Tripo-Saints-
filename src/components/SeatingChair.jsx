import React, { useState } from "react";

const SeatingChart = ({ employees }) => {
  // useState for Hover Chair
  const [hoveredChair, setHoveredChair] = useState(null);

  // Render hovered Div
  const renderTooltip = (employee) => (
    <div className="absolute bg-white p-2 rounded shadow-lg text-sm w-48 z-10">
      <div className="flex flex-row">
        <div className="dp-image rounded-full h-10 w-10 mr-3 bg-slate-500"></div>
        <div>
          <div>{employee.name}</div>
          <div className="font-semibold text-lg">{employee.position}</div>
        </div>
      </div>

      <div className="font-semibold">Team: {employee.team}</div>
      <div className="font-semibold"> Project: {employee.project}</div>
    </div>
  );

  const oneSpace = [
    {
      tableNo: "Table No. 1",
      chairIds: [1, 0, 2, 3],
    },
    {
      tableNo: "Table No. 2",
      chairIds: [0, 4, 5, 0],
    },
    {
      tableNo: "Table No. 3",
      chairIds: [6, 7, 8, 0],
    },
    {
      tableNo: "Table No. 4",
      chairIds: [9, 10, 11, 12],
    },
    {
      tableNo: "Table No. 5",
      chairIds: [13, 14, 0, 15],
    },
    {
      tableNo: "Table No. 6",
      chairIds: [0, 0, 16, 17],
    },
  ];

  return (
    <div className="flex flex-row flex-wrap border-2 border-[#9C9C9E]">
      {oneSpace.map((space, index) => (
        <div key={index} className="relative my-5 md:mx-10">
          {/** Render Two Chair  */}
          <div className="flex flex-row justify-between mx-5">
            {space.chairIds.slice(0, 2).map((chairId, index) => {
              const employee = employees.find(
                (emp) => emp.employeeId === chairId
              );
              return (
                <div
                  key={index}
                  className={`relative w-20 h-10 ${
                    employee ? "bg-[#412412]" : "bg-gray-300"
                  } rounded-tr-full rounded-tl-full`}
                  onMouseEnter={() => setHoveredChair(chairId)}
                  onMouseLeave={() => setHoveredChair(null)}
                >
                  {hoveredChair === chairId &&
                    employee &&
                    renderTooltip(employee)}
                </div>
              );
            })}
          </div>
          {/** Render Table  */}
          <div className="bg-[#E6E6E6] py-12 px-16 md:px-24 text-[#A89998] my-1">
            {space.tableNo}
          </div>
          {/** Render Two Chair  */}
          <div className="flex flex-row justify-between mx-5">
            {space.chairIds.slice(2, 4).map((chairId, index) => {
              const employee = employees.find(
                (emp) => emp.employeeId === chairId
              );
              return (
                <div
                  key={index}
                  className={`relative w-20 h-10 ${
                    employee ? "bg-[#412412]" : "bg-gray-300"
                  } rounded-br-full rounded-bl-full`}
                  onMouseEnter={() => setHoveredChair(chairId)}
                  onMouseLeave={() => setHoveredChair(null)}
                >
                  {hoveredChair === chairId &&
                    employee &&
                    renderTooltip(employee)}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeatingChart;
