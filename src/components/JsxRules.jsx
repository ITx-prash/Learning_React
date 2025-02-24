import React from "react";

const JsxRules = () => {
  return (
    <div>
      <h2 className="font-bold text-red-500 mt-5">JSX Rules</h2>
      <ul className="list-disc list-inside">
        <li>JSX must return a single parent element.</li>
        <li>JSX elements must be properly closed. </li>
        <li>
          JSX attributes are written using camelCase (e.g., className instead of
          class).
        </li>
      </ul>
    </div>
  );
};

export default JsxRules;
