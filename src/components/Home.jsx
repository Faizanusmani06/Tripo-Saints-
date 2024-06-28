//Home.jsx

import React, { useState } from "react";
import SeatingChair from "./SeatingChair";
import SearchBar from "./SearchBar";
import employeeData from "../Database/EmployeeData";

// Different teams for the filter section
const teamOptions = ["Android", "Web Developer", "Backend", "UI/UX"];
// Different positions for the filter section
const positionOptions = ["Developer", "Designer"];

function Home() {
  // useState for search term
  const [searchQuery, setSearchQuery] = useState("");
  // useState for filter criteria
  const [filterOptions, setFilterOptions] = useState({
    team: [],
    position: [],
  });
  // useState for showing the filter popup
  const [isFilterPopupVisible, setIsFilterPopupVisible] = useState(false);

  // Handle search function
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Handle filter change function
  const handleFilterChange = (filterType, filterValue) => {
    setFilterOptions((prev) => {
      const updatedOptions = { ...prev };
      if (updatedOptions[filterType].includes(filterValue)) {
        updatedOptions[filterType] = updatedOptions[filterType].filter(
          (item) => item !== filterValue
        );
      } else {
        updatedOptions[filterType].push(filterValue);
      }
      return updatedOptions;
    });
  };

  // Filter employee function
  const filteredEmployees = employeeData.filter((employee) => {
    const nameMatches = employee.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const teamMatches =
      filterOptions.team.length === 0 ||
      filterOptions.team.includes(employee.team.trim());
    const positionMatches =
      filterOptions.position.length === 0 ||
      filterOptions.position.includes(employee.position.trim());

    return nameMatches && teamMatches && positionMatches;
  });

  return (
    <div className="px-5 md:px-40 md:h-screen bg-[#F2F2F2]">
      <div className="pt-20 pb-10">
        <span className="py-12 px-8 bg-[#B3B3B3] rounded-full text-white text-2xl font-semibold">
          Spot
        </span>
      </div>
      {/** Search and Filter Section */}
      <div className="flex justify-end">
        <SearchBar onSearch={handleSearch} />
        <div className="relative my-2 ml-3">
          <button
            onClick={() => setIsFilterPopupVisible(!isFilterPopupVisible)}
            className="py-2 px-4 bg-blue-500 text-white rounded"
          >
            Filter
          </button>
          {isFilterPopupVisible && (
            <div className="absolute right-0 bg-white border rounded shadow-lg p-4 mt-2 w-64 z-10">
              <div className="mb-4">
                <label className="font-semibold">Filter by Team</label>
                {teamOptions.map((team) => (
                  <div key={team}>
                    <input
                      type="checkbox"
                      value={team}
                      onChange={() => handleFilterChange("team", team)}
                      checked={filterOptions.team.includes(team)}
                    />
                    <label className="ml-2">{team}</label>
                  </div>
                ))}
              </div>
              <div>
                <label className="font-semibold">Filter by Position</label>
                {positionOptions.map((position) => (
                  <div key={position}>
                    <input
                      type="checkbox"
                      value={position}
                      onChange={() => handleFilterChange("position", position)}
                      checked={filterOptions.position.includes(position)}
                    />
                    <label className="ml-2">{position}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/** Seating Chart Div */}
      <SeatingChair employees={filteredEmployees} />
    </div>
  );
}

export default Home;
