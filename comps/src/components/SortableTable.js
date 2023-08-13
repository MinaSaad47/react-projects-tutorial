import React from "react";
import Table from "./Table";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import useSorting from "../hooks/use-sorting";

function SortableTable({ config, data, keyFn }) {
  const { sortBy, sortOrder, sort, sortedData } = useSorting(data, config);

  const sortIcon = (label) => {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowUp />
          <GoArrowDown />
        </div>
      );
    }

    if (sortOrder === "asc") {
      return (
        <div>
          <GoArrowUp />
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div>
          <GoArrowDown />
        </div>
      );
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th className="cursor-pointer hover:bg-gray-200">
          <div className="flex item-center" onClick={() => sort(column.label)}>
            {sortIcon(column.label)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table config={updatedConfig} data={sortedData} keyFn={keyFn} />;
}

export default SortableTable;
