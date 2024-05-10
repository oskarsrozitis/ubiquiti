import React, { useRef } from "react";
import Button from "../common/Button/Button";
import FilterDropdown from "../FilterDropdown/FilterDropdown";

const FilterComponent: React.FC<FilterComponentProps> = ({
  filterDropdownOpen,
  productLines,
  selectedLines,
  onFilterChange,
  toggleFilterDropdown,
  closeFilterDropdown,
}) => {
  const filterButtonRef = useRef<HTMLDivElement>(null);

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
