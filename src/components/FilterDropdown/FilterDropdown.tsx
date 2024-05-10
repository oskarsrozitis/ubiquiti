/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import styles from "./FilterDropdown.module.scss";
import CloseIcon from "../icons/close.svg?react";

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  productLines,
  selectedLines,
  onFilterChange,
  onClose,
}) => {
  return (
    <div className={styles.filterDropdown}>
      <div className={styles.filterDropdownHeader}>
        <div className="text-lg">Filter</div>
        <div onClick={onClose} style={{ cursor: "pointer" }}>
          <CloseIcon className="w-4 h-4 hover:fill-gray-900 transition-all" />
        </div>
      </div>
      <div className={styles.filterDropdownContent}>
        <h5 className="font-semibold pb-6 text-gray-900 block">Product line</h5>
        {productLines.map((line) => (
          <div className="pb-4" key={line}>
            <label className="relative font-medium text-gray-700">
              <input
                type="checkbox"
                className="relative w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 focus:ring-2 me-2 -mt-1"
                checked={selectedLines.has(line)}
                onChange={(e) => onFilterChange(line, e.target.checked)}
              />
              {line}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterDropdown;
