// EmployeeCard.jsx

import React from "react";

function EmployeeCard({ employee }) {
  return (
    <div>
      <div>{employee.name}</div>
      <div>{employee.position}</div>
      <div>Location: {employee.location}</div>
    </div>
  );
}

export default EmployeeCard;
