import React from "react";
import Button from "@common/Button/Button";
import FilterDropdown from "@common/FilterDropdown";

const FilterComponent: React.FC<FilterComponentProps> = ({
  filterDropdownOpen,
  productLines,
  selectedLines,
  onFilterChange,
  toggleFilterDropdown,
  closeFilterDropdown,
}) => {

  return (
    <>
      <Button onClick={toggleFilterDropdown}>Filter</Button>
      {filterDropdownOpen && (
        <FilterDropdown
          productLines={productLines}
          selectedLines={selectedLines}
          onFilterChange={onFilterChange}
          onClose={closeFilterDropdown}
        />
      )}
    </>
  );
};

export default FilterComponent;
