interface IconProps {
  className?: string;
}

interface Button {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

interface ViewToggleComponentProps {
  currentView: string;
  onToggleView: (view: string) => void;
}

interface SearchComponentProps {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void; // Handler for clearing the input
}

interface InputProps {
  name: string;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

type Device = {
  id: string;
  product: {
    name: string;
    abbrev: string;
  };
  line: {
    name: string;
  };
  icon: {
    id: string;
  };
};

interface DeviceTableProps {
  devices: Device[];
}

interface FilterComponentProps {
  filterDropdownOpen: boolean;
  productLines: string[];
  selectedLines: Set<string>;
  onFilterChange: (lineName: string, isChecked: boolean) => void;
  toggleFilterDropdown: () => void;
  closeFilterDropdown: () => void;
}

interface FilterDropdownProps {
  productLines: string[];
  selectedLines: Set<string>;
  onFilterChange: (lineName: string, isChecked: boolean) => void;
  onClose: () => void; // Handler to close the dropdown
}

interface SingleProductNavProps {
  title: string;
}

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  productLine: {
    id: string;
    name: string;
  };
  description?: string;
  power?: {
    capacity: number;
  };
  ports?: {
    standard: number;
    plus: number[];
  };
  shortnames: string[];
  sysid: string;
}
