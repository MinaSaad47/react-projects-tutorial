import React, { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map(({ label, header }) => {
    if (header) {
      return <Fragment key={label}>{header()}</Fragment>;
    }
    return <th key={label}>{label}</th>;
  });

  const renderedRows = data.map((row) => {
    const renderedCells = config.map(({ render, label }) => (
      <td className="p-2" key={label}>
        {render(row)}
      </td>
    ));
    return (
      <tr key={keyFn(row)} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b">{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
}

export default Table;
