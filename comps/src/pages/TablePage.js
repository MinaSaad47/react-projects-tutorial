import React from "react";
import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

import _ from "lodash";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-600", score: 3.1 },
    { name: "Apple", color: "bg-red-600", score: 6.1 },
    { name: "Banana", color: "bg-yellow-600", score: 4.1 },
    { name: "Lime", color: "bg-green-600", score: 2.1 },
  ];
  const config1 = [
    {
      label: "Name",
      render: ({ name }) => name,
      sortValue: ({ name }) => name,
    },
    {
      label: "Color",
      render: ({ color }) => <div className={`p-3 m-2 ${color}`}></div>,
    },
    {
      label: "Score",
      render: ({ score }) => score,
      sortValue: ({ score }) => score,
    },
  ];
  const config2 = _.cloneDeep(config1);

  return (
    <div>
      <Table keyFn={(row) => row.name} data={data} config={config1} />
      <SortableTable keyFn={(row) => row.name} data={data} config={config2} />
    </div>
  );
}

export default TablePage;
