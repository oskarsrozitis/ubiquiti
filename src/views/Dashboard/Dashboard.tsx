// src/views/Dashboard/Dashboard.tsx
import React, { useState } from "react";
import { ActionBar } from "../../components/layout/ActionNav/ActionBar";
import { Header } from "../../components/layout/Header/Header";
import DeviceTable from "../../components/DeviceTable/DeviceTable";
import DeviceList from "../../components/DeviceList/DeviceList";
import useFetchDevices from "../../hooks/useFetchDevices";
import useFilteredDevices from "../../hooks/useFilteredDevices";

const Dashboard: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [viewState, setViewState] = useState<"list" | "table">("table");
  const [selectedLines, setSelectedLines] = useState<Set<string>>(new Set());
  const [filterDropdownOpen, setFilterDropdownOpen] = useState<boolean>(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const devices = useFetchDevices(`${apiUrl}`);
  const filteredDevices = useFilteredDevices(devices, input, selectedLines);

  const handleFilterChange = (lineName: string, isChecked: boolean) => {
    const updatedLines = new Set(selectedLines);
    isChecked ? updatedLines.add(lineName) : updatedLines.delete(lineName);
    setSelectedLines(updatedLines);
  };

  const toggleFilterDropdown = () => setFilterDropdownOpen(!filterDropdownOpen);
  const closeFilterDropdown = () => setFilterDropdownOpen(false);

  return (
    <>
      <Header />
      <ActionBar
        setInput={setInput}
        setViewState={setViewState}
        viewState={viewState}
        productLines={Array.from(
          new Set(devices.map((device) => device.line.name))
        )}
        selectedLines={selectedLines}
        onFilterChange={handleFilterChange}
        toggleFilterDropdown={toggleFilterDropdown}
        filterDropdownOpen={filterDropdownOpen}
        closeFilterDropdown={closeFilterDropdown}
      />
      <div className="container-xl mx-auto mt-8">
        {filteredDevices.length > 0 ? (
          viewState === "table" ? (
            <DeviceTable devices={filteredDevices} />
          ) : (
            <DeviceList devices={filteredDevices} />
          )
        ) : (
          <>
            <p className="text-2xl">No matches found.</p>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
