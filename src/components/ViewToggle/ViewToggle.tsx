import React, { useEffect } from "react";
import Button from "../common/Button/Button";
import ListIcon from "../icons/list.svg?react";
import ListFillIcon from "../icons/listFill.svg?react";
import GridIcon from "../icons/grid.svg?react";
import GridFillIcon from "../icons/gridFill.svg?react";

const ViewToggleComponent: React.FC<ViewToggleComponentProps> = ({
  currentView,
  onToggleView,
}) => {
  // Effect to load the initial view type from local storage
  useEffect(() => {
    const storedView = localStorage.getItem("viewType");
    if (storedView) {
      onToggleView(storedView);
    }
  }, [onToggleView]);

  const handleToggleView = (view: string) => {
    localStorage.setItem("viewType", view); // Save the current view type to local storage
    onToggleView(view);
  };

  return (
    <>
      <Button
        className={`p-1 ${currentView === "list" ? "bg-gray-200" : ""}`}
        onClick={() => handleToggleView("list")}
      >
        {currentView === "list" ? <GridFillIcon /> : <GridIcon />}
      </Button>
      <Button
        className={`p-1 ${currentView === "table" ? "bg-gray-200" : ""}`}
        onClick={() => handleToggleView("table")}
      >
        {currentView === "table" ? <ListFillIcon /> : <ListIcon />}
      </Button>
    </>
  );
};

export default ViewToggleComponent;
