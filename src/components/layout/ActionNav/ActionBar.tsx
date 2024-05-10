import React, { useEffect, useState } from "react";
import SearchComponent from "../../Search/Search";
import ViewToggleComponent from "../../ViewToggle/ViewToggle";
import FilterComponent from "../../Filter/Filter";
import styles from "./ActionBar.module.scss";



export const ActionBar: React.FC<ActionBarProps> = ({
  setInput,
  setViewState,
  viewState,
  productLines,
  selectedLines,
  onFilterChange,
  toggleFilterDropdown,
  filterDropdownOpen,
  closeFilterDropdown,
}) => {
  const [inputValue, setInputValue] = useState(
    () => localStorage.getItem("searchQuery") || ""
  );

  useEffect(() => {
    // Check if there's a query on initial load and if so, apply necessary actions
    if (inputValue) {
      setInput(inputValue);
    }
  }, [inputValue, setInput]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.toLowerCase();
    setInputValue(newValue);
    setInput(newValue);
    localStorage.setItem("searchQuery", newValue);
  };

  const onClearHandler = () => {
    setInputValue("");
    setInput("");
    localStorage.removeItem("searchQuery");
  };

  return (
    <div className={`${styles.actionBar} flex align-center`}>
      <div className="py-3 justify-between w-full px-4">
        <div className="flex justify-between relative gap-y-4 lg:gap-y-0 flex-col lg:flex-row items-center">
          <SearchComponent
            value={inputValue}
            onChange={handleInputChange}
            onClear={onClearHandler}
          />
          <div className="gap-x-4 flex">
            <ViewToggleComponent
              currentView={viewState}
              onToggleView={setViewState}
            />
            <FilterComponent
              filterDropdownOpen={filterDropdownOpen}
              productLines={productLines}
              selectedLines={selectedLines}
              onFilterChange={onFilterChange}
              toggleFilterDropdown={toggleFilterDropdown}
              closeFilterDropdown={closeFilterDropdown}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
