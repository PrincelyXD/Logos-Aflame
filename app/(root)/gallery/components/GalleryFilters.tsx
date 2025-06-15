import React, { SetStateAction } from "react";
const filters = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "worship",
    label: "Worship",
  },
  {
    id: "events",
    label: "Events",
  },
  {
    id: "choir",
    label: "Choir",
  },
  {
    id: "outreach",
    label: "Outreach",
  },
];
interface GalleryFilterProps {
  activeFilter: string;
  setActiveFilter: React.Dispatch<SetStateAction<string>>;
}

export const GalleryFilters = ({
  activeFilter,
  setActiveFilter,
}: GalleryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            activeFilter === filter.id
              ? "bg-gradient-to-r from-[#f79007] to-red-700 hover:from-[#f79007] text-white shadow-lg"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
