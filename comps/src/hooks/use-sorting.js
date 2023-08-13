import { useState } from "react";

function useSorting(data, config) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const sort = (label) => {
    if (sortBy !== label || sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find(({ label }) => label === sortBy);
    const reverseOrder = sortOrder !== "asc" ? -1 : 1;
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      return (valueB - valueA) * reverseOrder;
    });
  }

  return {
    sort,
    sortBy,
    sortOrder,
    sortedData,
  };
}

export default useSorting;
