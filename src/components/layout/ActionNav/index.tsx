import React, { useEffect, useState } from "react";
import SearchComponent from "@common/Search";
import ViewToggleComponent from "@common/ViewModeSwitch";
import FilterComponent from "@common/Filter";
import styles from "./ActionBar.module.scss";

export const ActionBar: React.FC<ActionBarProps> = ({
  input,
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
    () => sessionStorage.getItem("searchQuery") || ""
  );

  useEffect(() => {
    setInputValue(input); // Set the local input value to the prop value whenever it changes
  }, [input]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.toLowerCase();
    setInputValue(newValue);
    setInput(newValue);
    sessionStorage.setItem("searchQuery", newValue);
  };

  const onClearHandler = () => {
    setInputValue("");
    setInput("");
    sessionStorage.removeItem("searchQuery");
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
