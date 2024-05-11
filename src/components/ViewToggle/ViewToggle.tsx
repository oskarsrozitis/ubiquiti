import React, { useEffect } from "react";
import Button from "../common/Button/Button";
import ListIcon from "../icons/list.svg?react";
import ListFillIcon from "../icons/listFill.svg?react";
import GridIcon from "../icons/grid.svg?react";
import GridFillIcon from "../icons/gridFill.svg?react";


type ViewType = "table" | "list";

interface ViewToggleComponentProps {
  currentView: string;
  onToggleView: (view: ViewType) => void;
}

const ViewToggleComponent: React.FC<ViewToggleComponentProps> = ({
  currentView,
  onToggleView,
}) => {
  // Effect to load the initial view type from local storage
  useEffect(() => {
    const storedView = localStorage.getItem("viewType");
    if (storedView === "table" || storedView === "list") {
      onToggleView(storedView as ViewType);  // Casting since we checked the value
    }
  }, [onToggleView]);

  const handleToggleView = (view: string) => {
    if (view === "table" || view === "list") {
      localStorage.setItem("viewType", view);
      onToggleView(view as ViewType);  // Casting since we checked the value
    } else {
      console.error("Invalid view type provided:", view);
    }
  };

  return (
    <>
      <Button
        className={`p-1 ${currentView === "list" ? "bg-gray-100" : ""}`}
        onClick={() => handleToggleView("list")}
      >
        {currentView === "list" ? <GridFillIcon /> : <GridIcon />}
      </Button>
      <Button
        className={`p-1 ${currentView === "table" ? "bg-gray-100" : ""}`}
        onClick={() => handleToggleView("table")}
      >
        {currentView === "table" ? <ListFillIcon /> : <ListIcon />}
      </Button>
    </>
  );
};

export default ViewToggleComponent;
