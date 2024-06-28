// EmployeeList.jsx

import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employeeData }) {
  return (
    <div className="employee-list">
      {employeeData.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
