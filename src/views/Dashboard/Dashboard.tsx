import React, { useState } from "react";
import { ActionBar } from "../../components/layout/ActionNav/ActionBar";
import { Header } from "../../components/layout/Header/Header";
import DeviceTable from "../../components/DeviceTable/DeviceTable";
import DeviceList from "../../components/DeviceList/DeviceList";
import Loading from "../../components/Loading/Loading.tsx";
import useFetchDevices from "../../hooks/useFetchDevices";
import useFilteredDevices from "../../hooks/useFilteredDevices";

const Dashboard: React.FC = () => {
  const [input, setInput] = useState<string>(() => localStorage.getItem('searchQuery') || "");
  const [viewState, setViewState] = useState<"list" | "table">("table");
  const [selectedLines, setSelectedLines] = useState<Set<string>>(new Set());
  const [filterDropdownOpen, setFilterDropdownOpen] = useState<boolean>(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  const { devices, loading, error } = useFetchDevices(`${apiUrl}`);
  const filteredDevices = useFilteredDevices(devices, input, selectedLines);

  const handleFilterChange = (lineName: string, isChecked: boolean) => {
    const updatedLines = new Set(selectedLines);
    isChecked ? updatedLines.add(lineName) : updatedLines.delete(lineName);
    setSelectedLines(updatedLines);
  };

  const toggleFilterDropdown = () => setFilterDropdownOpen(!filterDropdownOpen);
  const closeFilterDropdown = () => setFilterDropdownOpen(false);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error loading devices: {error}</p>;
  }

  return (
    <>
      <Header />
      <ActionBar
        input={input}
        setInput={setInput}
        setViewState={setViewState}
        viewState={viewState}
        productLines={Array.from(
          new Set(devices.map(device => device.line?.name).filter(name => name !== null))
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
          <div className="flex flex-col gap-3 w-6/12">
            <p className="text-2xl">No devices found.</p>
            <p>
              Please consider using alternative search queries such as model,
              serial number, or other relevant identifiers to enhance the
              accuracy of your search results.
            </p>
            <button
              className="w-fit bg-[#006FFF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setInput("");
                localStorage.removeItem("searchQuery")
                setSelectedLines(new Set()); // also resetting the filter selections if needed
                if (typeof window !== "undefined") {
                  window.scrollTo(0, 0); // optionally reset scroll
                }
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
