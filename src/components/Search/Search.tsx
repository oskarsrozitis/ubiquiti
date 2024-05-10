/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import Input from "../common/Input/Input";
import SearchIcon from "../icons/search.svg?react";
import CloseIcon from "../icons/close.svg?react";

const SearchComponent: React.FC<SearchComponentProps> = ({
  value,
  onChange,
  onClear,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="relative">
      <SearchIcon
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      <Input
        name="device-search"
        type="text"
        id="searchInput"
        className="focus:outline-none focus:ring-0 ring-0 transition-all rounded"
        value={value}
        onChange={onChange}
        placeholder=""
        style={{ paddingLeft: "40px", minWidth: "350px" }}
      />
      <CloseIcon
        onClick={onClear}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      />
    </form>
  );
};

export default SearchComponent;
