import React, { useState, useMemo } from "react";
import { ActionBar } from "@components/Layout/ActionNav/index";
import { Header } from "@components/Layout/Header/index";
import DeviceTable from "@components/Features/Devices/DeviceTable/index";
import DeviceList from "@components/Features/Devices/DeviceList/index";
import Loading from "@common/Loading/index";
import useFetchDevices from "@hooks/useFetchDevices";
import useFilteredDevices from "@hooks/useFilteredDevices";

const Dashboard: React.FC = () => {
  const [input, setInput] = useState(
    sessionStorage.getItem("searchQuery") || ""
  );
  const [viewState, setViewState] = useState<"list" | "table">("table");
  const [selectedLines, setSelectedLines] = useState<Set<string>>(new Set());
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const { devices, loading, error } = useFetchDevices(apiUrl);
  const filteredDevices = useFilteredDevices(devices, input, selectedLines);

  const productLines = useMemo(
    () =>
      Array.from(
        new Set(devices.map((device) => device.line?.name).filter(Boolean))
      ),
    [devices]
  );

  const handleFilterChange = (lineName: string, isChecked: boolean) => {
    setSelectedLines((prevLines) => {
      const newLines = new Set(prevLines);
      isChecked ? newLines.add(lineName) : newLines.delete(lineName);
      return newLines;
    });
  };

  const toggleFilterDropdown = () => setFilterDropdownOpen((prev) => !prev);
  const closeFilterDropdown = () => setFilterDropdownOpen(false);

  if (loading) return <Loading />;
  if (error) return <p>Error loading devices: {error}</p>;

  return (
    <>
      <Header />
      <ActionBar
        input={input}
        setInput={setInput}
        setViewState={setViewState}
        viewState={viewState}
        productLines={productLines}
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
          <div className="flex flex-col gap-3 lg:w-4/12">
            <p className="text-2xl">No devices found.</p>
            <p>
              Consider using alternative search queries such as model, serial
              number, or other identifiers.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded w-fit"
              onClick={() => {
                setInput("");
                sessionStorage.removeItem("searchQuery");
                setSelectedLines(new Set());
                window.scrollTo(0, 0);
              }}
            >
              Reset search
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
